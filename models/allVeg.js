const mongoose = require("mongoose");

const allVegSchema = new mongoose.Schema({
    name:String,
    img:String,
    local:String,
    quantity:{
        quantity1:String,
        price1:Number,
        quantity2:String,
        price2:Number,
        quantity3:String,
        price3:Number,
        quantity4:String,
        price4:Number
    },
    color:String
});

module.exports = mongoose.model("allDairy", allVegSchema);