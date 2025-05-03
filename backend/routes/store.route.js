import express from "express"
export const storeRouter=express.Router();

//get all stores
//get all products of a store
storeRouter.get("/");
storeRouter.get("/:id/products");

