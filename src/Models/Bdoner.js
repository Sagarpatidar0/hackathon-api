const mongoose = require("mongoose");

const BdonerSchema = new mongoose.Schema({
    donername: {
        type: String,
        require: true
    },
    bloodgroup: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    mobilenumber: {
        type: Number,
        require: true,
        unique: true
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
})

module.exports = mongoose.model("Bdoner",BdonerSchema);