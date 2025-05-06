import { productModel } from "../models/product.model.js";

export const getSingleProduct=async(req, res)=>{
  try {
    const productId=req.params.id;
    const product=await productModel.findById(productId);
    if(!product){
      return res.status(404).json({message:"product not found"})
    }
    return res.status(200).json({product})
  } catch (error) {
    return res.status(500).json({message:"Error occur while fetching product"})
  }
}