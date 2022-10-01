const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    readed:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports = mongoose.model("Contact",contactSchema);