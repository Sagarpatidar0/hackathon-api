const mongoose = require("mongoose");

const GdonerSchema = new mongoose.Schema({
    donername: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    gname: {
        type: String,
        require: true
    },
    mobilenumber: {
        type: Number,
        require: true
    },
    email: {
        type: String
    },
    line: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        require: true
    }
},{timestamps:true});

module.exports = mongoose.model("Gdoner",GdonerSchema);