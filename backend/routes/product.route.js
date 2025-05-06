import express from "express"
import { getSingleProduct } from "../controllers/productController.js";
export const productRouter=express.Router();

//get single product
productRouter.post("/:id", getSingleProduct);