const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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


//DataHashing for password field using Bcryptjs module
UserSchema.pre('save',async function(next){

    if(this.isModified('Password'))
    {
        this.Password= await bcrypt.hash(this.Password,10);
        //this.ConfirmPassword=undefined;
        next();
    }
})

const CollectionUser = new mongoose.model('User',UserSchema);

module.exports=CollectionUser;