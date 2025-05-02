import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{type:String, required:true},
    description:{type:String},
    images:[{type:String}],
    price:{type:Number, required:true},
    stock:{type:Number, required:true, default:0}, 
    category:{type:String, required:true},
    isPublished:{type:Boolean, default:false}
}, {timestamps:true});

export const  productModel=mongoose.model("Product", productSchema);