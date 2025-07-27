const express = require("express");
const router = express.Router();
const Dairy = require("../models/dairy");
const AllDairy = require("../models/allDairy");
const authenticateToken = require("../middlewares/auth");

router.get("/", authenticateToken, async (req, res) => {
  try {
    const dairyItem = await Dairy.find({});
    res.json(dairyItem);
  } catch (error) {
    console.error("Error fetching dairy products:", error);
    res.status(500).send("Server Error");
  }
});

router.get("/all", authenticateToken, async (req, res) => {
  try {
    const allDairy = await AllDairy.find({});
    res.render("dairy.ejs", { products: allDairy });
  } catch (error) {
    console.error(
      "failed to rendering page or Error fetching dairy products:",
      error
    );
  }
});
module.exports = router;
