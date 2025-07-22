// middlewares/auth.js
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    console.log("❌ No token found in cookies");
    return res.redirect("/login");
  }

  jwt.verify(token, "harsharsharshars", (err, decoded) => {
    if (err) {
      console.log("❌ Invalid token:", err.message);
      return res.status(403).send("Invalid token");
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = authenticateToken;