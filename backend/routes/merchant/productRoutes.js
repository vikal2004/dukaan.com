import express from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../../controllers/merchant/productController.js";
import { isAuthenticated } from "../../middleware/authMiddleware.js";
import upload from "../../middleware/upload.js"
import { roleCheck } from "../../middleware/roleCheck.js";
export const merchantProductRouter=express.Router();

//list's merchant own plot
merchantProductRouter.get("/",isAuthenticated, roleCheck("merchant") , getProducts);
//create product
merchantProductRouter.post("/",isAuthenticated, roleCheck("merchant") ,upload.array("images"), createProduct);
//get one product
merchantProductRouter.get("/:id", isAuthenticated, roleCheck("merchant") , getProduct)
//update product
merchantProductRouter.put("/:id",isAuthenticated, roleCheck("merchant") ,upload.array("images") ,updateProduct)
//delete product
merchantProductRouter.delete("/:id",isAuthenticated, roleCheck("merchant") , deleteProduct)