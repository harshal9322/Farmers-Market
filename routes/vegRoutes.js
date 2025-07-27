const express = require("express");
const router = express.Router();
const allVeg = require("../models/allVeg.js");
const authenticateToken = require("../middlewares/auth.js");

router.get("/all", authenticateToken, async (req, res)=>{
    try{
        const vegies = await allVeg.find({});
        console.log(vegies);
        res.render("veg.ejs", {products:vegies});
    }catch(err){
        console.log("failed to fetch vegies", err);
        res.status(500).send("server error");
    }
});

module.exports = router;