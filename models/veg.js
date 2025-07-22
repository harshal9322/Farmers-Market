const mongoose = require ("mongoose");

const vegSchema = new mongoose.Schema({
    name:String,
    local:String,
    img:String,
    quantity:{
        quantity1:String,
        price1:Number,
        quantity2:String,
        price2:Number,
        quantity3:String,
        price3:Number,
        quantity4:String,
        price4:Number,
    },
    category:String
});

module.exports = mongoose.model("Veg", vegSchema);