import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    
    name:{type:String, required:true}, 
    email:{type:String, required:true, unique:true}, 
    password:{type:String, required:true}, 
    role:{type:mongoose.Schema.Types.ObjectId, ref:"Role" , required:true},

     isverifiedSeller:{type:Boolean, default:false}
}, {timestamps:true});

export const userModel=mongoose.model("User", userSchema)