const mongoose = require('mongoose')
 const dataSchema = new mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true
    }
 })
 module.exports = mongoose.model('data',dataSchema);