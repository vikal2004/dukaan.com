import { orderModel } from "../../models/order.model.js";
import { storeModel } from "../../models/store.model.js";

export const getOrders=async(req , res)=>{
    try {
        const merchantId=req.user.id;
        const store=await storeModel.findOne({merchant:merchantId});
        if(!store){
            return res.status(404).json({message:"Store does'nt exists"})
        }
        //find all the orders
        const allOrders=await orderModel.find({}).populate("items.product");

       const filteredOrders= allOrders.filter(order=>order.items.some((item)=>item.product?.store?.toString() === store._id.toString()))
        
       res.status(200).json({ orders: filteredOrders });
    } catch (error) {
        console.error("Get merchant orders error:", error);
        res.status(500).json({ message: "Server error" });
    }
}
export const updateOrder=async(req, res)=>{
        try {
            const merchantId = req.user.id;
            const orderId = req.params.id;
            const { status } = req.body;
        
            const store = await storeModel.findOne({ merchant: merchantId });
            if (!store) {
              return res.status(404).json({ message: "Store not found" });
            }
        
            const order = await orderModel
              .findById(orderId)
              .populate("products.product");
        
            if (!order) {
              return res.status(404).json({ message: "Order not found" });
            }
        
            const hasMerchantProduct = order.products.some(
              (item) => item.product?.store?.toString() === store._id.toString()
            );
        
            if (!hasMerchantProduct) {
              return res.status(403).json({ message: "Unauthorized to update this order" });
            }
        
            // Optional: Validate status value
            const validStatuses = ["pending", "confirmed", "shipped", "delivered", "cancelled"];
            if (!validStatuses.includes(status)) {
              return res.status(400).json({ message: "Invalid status value" });
            }
        
            // Update order status
            order.status = status;
            await order.save();
        
            res.status(200).json({ message: "Order updated successfully", order });
    } catch (error) {
        console.error("Update order error:", error);
        res.status(500).json({ message: "Server error" });
    }
}
export const getOrderDetails=async(req, res)=>{
    try {
        const merchantId = req.user.id;
        const orderId = req.params.id;
    
        // 1. Get merchant's store
        const store = await storeModel.findOne({ merchant: merchantId });
        if (!store) {
          return res.status(404).json({ message: "Store not found" });
        }
    
        // 2. Get order and populate product info
        const order = await orderModel
          .findById(orderId)
          .populate("products.product");
    
        if (!order) {
          return res.status(404).json({ message: "Order not found" });
        }
    
        // 3. Check if at least one product in the order belongs to this merchant's store
        const hasMerchantProduct = order.products.some(
          (item) => item.product?.store?.toString() === store._id.toString()
        );
    
        if (!hasMerchantProduct) {
          return res.status(403).json({ message: "Unauthorized to view this order" });
        }
    
        res.status(200).json({
          message: "Order details fetched successfully",
          order,
        });

    } catch (error) {
        console.error("Get merchant order details error:", error);
        res.status(500).json({ message: "Server error" });
    }
}