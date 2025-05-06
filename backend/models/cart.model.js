import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User", 
        required:true,
       unique:true //ensure only one cart per user
    }, 
    items:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',  // Reference to the Product model
                required: true,
            }, 
            quantity:{
                    type: Number,
                    required: true,
                    min: 1,
            }
        }
    ]

}, {timestamps:true})

export const cartModel=mongoose.model("Cart" , cartSchema);