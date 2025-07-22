const express = require("express");
const router = express.Router();
const User = require("../models/user")
const Dairy = require("../models/dairy");
const AllDairy = require("../models/allDairy");
const veg = require("../models/veg");
const authenticateToken = require("../middlewares/auth");

router.post('/', authenticateToken, async (req, res) => {
  const { fru } = req.body;
  const regex = new RegExp("^" + fru + "$", 'i');

  const product = await veg.findOne({ name: regex });
  if (!product) return res.send("No product found");

  const user = await User.findById(req.userId);
  if (!user) return res.send("User not found");

  const cartItem = user.cart.find(item => item.name === product.name);

  res.render("index", { product, cartItem });
});

module.exports = router;