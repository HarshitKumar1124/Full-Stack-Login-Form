const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    EmailID:{
        type:String,
        required:true,
        unique:true
    },
    MobileNo:{
        type:Number,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
     
    },
    ConfirmPassword:{
        type:String,
        required:true
    }
})

const CollectionUser = new mongoose.model('User',UserSchema);

module.exports=CollectionUser;