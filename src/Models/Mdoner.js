const mongoose = require("mongoose");

const MdonerSchema = new mongoose.Schema({
    donername: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        default: "onetime"
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    email: {
        type: String
    },
    line: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,

    },
    pincode: {
        type: Number,

    }
},{timestamps:true})

module.exports = mongoose.model("Mdoner", MdonerSchema);