import { productModel } from "../models/product.model.js";
import {storeModel} from "../models/store.model.js"

export const getAllStores=async(req, res)=>{
    try {
        const stores=await storeModel.find({});
        if(!stores){
            res.status(404).json({message:"stores not found"})
            return ;
        }
        if(!stores.length==0){
            res.status(404).json({message:"stores not avilable"})
            return ;
        }
        res.status(200).json({stores})

    } catch (error) {
        return res.status(500).json({message:"Internel server error while fetching all stores"})
    }
}

export const getProductsforSpecificStore=async(req, res)=>{
    try {
        const storeId=req.params.id;
        const products=await productModel.find({store:storeId})
        if(!products || products.length===0){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({products});
    } catch (error) {
        return res.status(500).json({message:"Internel error while fetching products for specific stores"})
        
    }
 
}