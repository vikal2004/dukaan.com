import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User", 
        required:true
    }, 
    items:[
        {
            product:{type:mongoose.Schema.Types.ObjectId, ref:"Product"},
            quantity:{type:Number, required:true},
            priceAtPurchase:{type:Number,required:true}
        }], 
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["pending", "confirmed", "shipped", "delivered", "cancelled"],
        default:"pending"
    }, 
    paymentStatus:{
        type:String,
        enum:["unpaid", "paid", "failed"],
        default:"unpaid"
    },
    shippingAddress:{
        fullName:{}, 
        addressLine:{},
        city:{},
        pincode:{},
        country:{},
        phone:{}
    }

}, {timestamps});

export const orderModel=mongoose.model("Order", orderSchema)