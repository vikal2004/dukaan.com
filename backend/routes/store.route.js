import express from "express"
import { getAllStores, getProductsforSpecificStore } from "../controllers/storeController.js";
export const storeRouter=express.Router();

//get all stores
//get all products of a store
storeRouter.get("/", getAllStores);
storeRouter.get("/:id/products",getProductsforSpecificStore );

