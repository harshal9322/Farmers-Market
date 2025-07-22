const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirm_password:String,
    resetToken:String,
    resetTokenExpiry:String,
    cart:[{
        _id:{type: mongoose.Schema.Types.ObjectId, auto:true },
        name:String,
        local:String,
        quantity:String,
        price:Number,
        img:String,
    }]
});

module.exports = mongoose.model("User", userSchema);