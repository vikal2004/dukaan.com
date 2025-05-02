import mongoose from "mongoose"

const roleSchema=new mongoose.Schema({
  name:{
    type:String,
    enum:["admin", "merchant", "customer"],
    required:true,
    unique:true
  }
}, {timestamps:true});

export const roleModel=mongoose.model("Role", roleSchema)