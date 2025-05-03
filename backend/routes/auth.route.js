import express from "express"
import { Login, Register } from "../controllers/authController.js";
export const authRouter=express.Router();

authRouter.post("/register", Register);
authRouter.post("/login", Login);