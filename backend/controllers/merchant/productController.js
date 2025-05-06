import { productModel } from "../../models/product.model.js";
import {storeModel} from "../../models/store.model.js"
import uploadToCloudinary from "../../utils/uploadToCloudinary.js";
export const getProducts=async(req , res)=>{
  try {
    const merchantId=req.user.id;
    const store=await storeModel.findOne({merchant:merchantId})

    if(!store){
      return res.status(404).json({ message: "Store not found for this merchant." });
    }

    const products=await productModel.find({store:store._id});
    if(!products){
      return res.status(403).json({message:"Product not found"});
    }
    res.status(200).json({success:true,products})
      
  } catch (error) {
    console.error("get products error:", error);
    res.status(500).json({ message: "Server error" });
  }

}
export const getProduct=async(req, res)=>{
  try {
    const productId = req.params.id;

    const product = await productModel.findById(productId).populate("store");

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Get single product error:", error);
    return res.status(500).json({ message: "Server error while fetching product." });
  }

}
export const createProduct=async(req, res)=>{
 try {
    const { title, description, price, stock, category } = req.body;
    const merchantId = req.user.id;

    // Find the merchant's store
    const store = await storeModel.findOne({ merchant: merchantId });
    if (!store) return res.status(404).json({ message: "Store not found" });

    // Upload all files to Cloudinary
    const files = req.files;
    const imageUploadPromises = files.map(file =>
      uploadToCloudinary(file.buffer, `${Date.now()}-${file.originalname}`)
    );
    const imageUrls = await Promise.all(imageUploadPromises);
   
    // Create product
    const newProduct = await productModel.create({
        store: store._id,
        title,
        description,
        price,
        stock,
        category,
        images: imageUrls,
      });

      res.status(201).json(newProduct);
 } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ message: "Server error" });
 }
}
export const updateProduct=async(req, res)=>{
  try {
    //step-1. what value this controller will accept
    //step-2 what models will use and affect by this controller
    //step-3 what is the goal of this controller
    //step-4 what this controller will return in value
    const {title, description, price, stock, category}=req.body;
    if(!title || !description || !price || !stock || !category){
      return res.status(400).json({message:"All fields are required"})
    }

    const productId=req.params.id;
    const merchantId=req.user.id;

    const store=await storeModel.findOne({merchant:merchantId});
    if(!store){
      return res.status(404).json({message:"store not avilable with for this user"})
    }

    const existingproduct=await productModel.findOne({store:store._id});
    if(!existingproduct){
      return res.status(403).json({message:"product no longer belongs to this store"})
    }

    const product=await productModel.findById(productId);
    
    if(!product){
      return res.status(404).json({message:"product is not exists"})
    }

    //check if new files are provided if yes put them to cloudinary
     let  imageUrls=[];
     if(req.files && req.files.length > 0) {
       const imageUploadPromises= req.files.map(file=>
         uploadToCloudinary(file.buffer , `${Date.now()}-${file.originalname}`)
        )
        imageUrls =await Promise.all(imageUploadPromises)
     }
    if(product.title) product.title=title;
    if(product.description) product.description=description;
    if(product.price) product.price=price;
    if(product.stock) product.stock=stock;
    if(product.category) product.category=category;
    if(product.images) product.images=imageUrls;

    await product.save();

    res.status(200).json({product})
  } catch (error) {
    console.error("Update product error:", error);
    return res.status(500).json({message:"server error"})
  }

}
export const deleteProduct=async(req, res)=>{
  try {
    const productId=req.params.id;
    const merchantId=req.user.id;

    const store=await storeModel.findOne({merchant:merchantId});
    if (!store) return res.status(404).json({ message: "Store not found" });

    const existingproduct=await productModel.findOne({store:store._id});
    if(!existingproduct) return res.status(404).json({message:"product is not exist in this store"})

    await productModel.findByIdAndDelete(productId);

    res.status(200).json({message:"product deleted successfully"})

  } catch (error) {
    console.error("delete product error:", error);
    res.status(500).json({ message: "Server error" });
  }

}
