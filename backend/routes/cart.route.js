import express from "express"
import { checkoutCart } from "../controllers/cartController.js";
export const cartRouter=express.Router();

//checkout as guest
cartRouter.post('/checkout', checkoutCart);

