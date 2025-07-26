const express = require("express");
const app = express();
const path = require("path");
const sendOTP = require("./mailer.js");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const session = require("express-session");

const veg = require("./models/veg");
const fruit = require("./models/fruit");
const dairy = require("./models/dairy");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const authenticateToken = require("./middlewares/auth");

app.use(
  "/api/dairy/images",
  express.static(path.join(__dirname, "public/images"))
);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(
  session({
    secret: "harsharsharshars",
    resave: false,
    saveUninitialized: true,
  })
);

const dairyRoutes = require("./routes/dairyRoutes");
app.use("/api/dairy", dairyRoutes);

const srchRoute = require("./routes/srchRoute.js");
app.use("/search", srchRoute);

mongoose.connect("mongodb://127.0.0.1:27017/farmersMarket");

// -------------------------------------------------------//
require('dotenv').config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMMIL_USER,
    pass: GMAIL_PASS,
  },
});

//--------------------------------------------------------//

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/user", authenticateToken, (req, res) => {
  const message = req.session.successMsg || null;
  req.session.successMsg = null;
  res.render("user.ejs", { message });
});

let otpStore = {};
let verifiedEmails = new Set();

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.json("Email is required");
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;
  await sendOTP(email, otp);
  res.json("Otp send successfully");
});

app.post("/verify-otp", (req, res) => {
  const { email, OTP } = req.body;

  if (!email || !OTP) return res.json("Email and OTP required");

  if (otpStore[email] === OTP) {
    verifiedEmails.add(email);
    delete otpStore[email];
    res.json("OTP verified");
  } else {
    res.json("Invalid OTP");
  }
});

app.post("/register", async (req, res) => {
  let { username, email, password, confirmPassword } = req.body;

  if (!verifiedEmails.has(email)) {
    return res.json("Please verify OTP first.");
  }

  const usernameExists = await User.findOne({ username: username });
  if (usernameExists) {
    return res.json("username already taken");
  }

  if (password === confirmPassword) {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.json("user already exists");
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hash });
    await newUser.save();

    verifiedEmails.delete(email);
    const token = jwt.sign({ userId: newUser._id }, "harsharsharshars");
    res.cookie("token", token);
    res.json("Registration Successful.");
  } else {
    res.json("password do not match");
  }
});

app.get("/login", (req, res) => {
  const message = req.query.msg || null;
  const messageRed = req.query.msgRed || null;
  res.render("login.ejs", { message, messageRed });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  const isUser = await User.findOne({ email: email });
  if (!isUser) {
    return res.redirect("/login?msgRed=Email Or Password Is Incorrect");
  }

  const isMatch = await bcrypt.compare(password, isUser.password);
  if (!isMatch) {
    return res.redirect("/login?msgRed=Email Or Password Is Incorrect");
  }

  const token = jwt.sign({ userId: isUser._id }, "harsharsharshars");
  res.cookie("token", token);
  req.session.successMsg = "You Are Logged In Successfully";
  res.redirect("/user");
});

app.post("/login/forgot", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.redirect("/login?msg=Email Not Registered");
  }

  const token = crypto.randomBytes(32).toString("hex");
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600000;
  await user.save();

  const resetLink = `http://localhost:3000/reset-password/${token}`;

  await transporter.sendMail({
    to: user.email,
    subject: "Reset Your Password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link is valid for 1 hour.</p>`,
  });

  res.redirect("/login?msg=Reset Email Sent Successfully To Your Email!");
});

app.get("/user/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

app.get("/api/veg", async (req, res) => {
  const allVeg = await veg.find();
  res.json(allVeg);
});

app.get("/api/fruit", async (req, res) => {
  const allFruits = await fruit.find();
  res.json(allFruits);
});

app.post("/add-to-cart", authenticateToken, async (req, res) => {
  let cartItem = req.body;
  const user = await User.findById(req.userId);

  if (!user) return res.send("user not found");

  const existingItem = user.cart.find(
    (item) => item.name === cartItem.name && item.quantity === cartItem.quantity
  );
   let currCount = 1;
  if (existingItem) {
    existingItem.count = (existingItem.count || 1) + 1;
    currCount = existingItem.count;
  } else {
    user.cart.push(cartItem);
  }

  await user.save();
  res.json({
    message:"One Item Added",
    count:currCount
  });
});

app.get("/cart-count", authenticateToken, async (req, res)=>{
  const user = await User.findById(req.userId);
  if(!user) return res.send("User Not Found");
  res.send({cartCount:user.cart.length});

})

app.post("/remove-item", authenticateToken, async (req, res)=>{
  const cartItem = req.body;
  const user = await User.findById(req.userId);
  if(!user) return res.send("User Not Found");  
  const existingItem = user.cart.find(
    (item)=> item.quantity === cartItem.quantity && item.name === cartItem.name
  );

  let currCount = 1;
  if(existingItem){
    existingItem.count = (existingItem.count || 1)-1;
    currCount = existingItem.count;
    if(existingItem.count === 0){
      user.cart.pull(existingItem);
    }
  }
    await user.save();
    res.json({
      message:"One Item Removed",
      count:currCount
    });
});


app.get("/cart", authenticateToken, async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user) return res.send("user not found");
  res.render("cart.ejs", {
    cartItems: user.cart,
    email: user.email,
  });
});

app.post("/delete-item", authenticateToken, async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ success: false });

    user.cart.pull({_id:id});
    await user.save();

    res.json({ message: "One Item Deleted", success:true });
  } catch (err) {
    console.error("Error removing item:", err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
