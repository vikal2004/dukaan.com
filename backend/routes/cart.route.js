import express from "express"
export const cartRouter=express.Router();

//checkout as guest
cartRouter.post('/checkout');

