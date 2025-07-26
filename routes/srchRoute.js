const express = require("express");
const router = express.Router();
const User = require("../models/user")
const Dairy = require("../models/dairy");
const AllDairy = require("../models/allDairy");
const veg = require("../models/veg");
const authenticateToken = require("../middlewares/auth");

router.get('/', authenticateToken, async (req, res) => {
  const query = req.query.q;
  if(!query){
    return res.json([]);
  }

  const regex = new RegExp("^"+query,"i");
  try{
    const matchItems = await veg.find({name:regex}).limit(15);
    res.json(matchItems);
  }catch (err){
    console.log("failed to fetch / search Items", err);
    res.status(500).json({error:"search Failed"});
  }
});

module.exports = router;