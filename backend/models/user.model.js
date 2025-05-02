import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    
    name:{type:String, required:true}, 
    email:{type:String, required:true, unique:true}, 
    password:{type:String, required:true}, 
    role:{type:mongoose.Types.Schema.ObjectId, ref:"Role" , required:true},

    //seller-specific fields

   storeName:{type:String},
   storeDescription:{type:String},
   isverifiedSeller:{type:Boolean, default:false}

   //admin related field can be add later

}, {timestamps:true});

export const userModel=mongoose.model("User", userSchema)