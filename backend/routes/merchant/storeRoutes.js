import express from "express"
import { getStore, updateStore } from "../../controllers/merchant/storeController.js";
import { isAuthenticated } from "../../middleware/authMiddleware.js";

export const merchantStoreRouter=express.Router();

merchantStoreRouter.get("/",isAuthenticated, getStore);
merchantStoreRouter.put("/",isAuthenticated, updateStore);