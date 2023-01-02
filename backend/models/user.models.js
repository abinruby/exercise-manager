const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},{
    timestamps:true
})

const User= mongoose.model('User',UserSchema);

module.exports=User;