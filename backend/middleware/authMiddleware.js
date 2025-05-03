import jwt from "jsonwebtoken"
import { userModel } from "../models/user.model";
export const isAuthenticated=async(req, res, next)=>{
    const token=req.headers.authorization?.split("")[1];
    if(!token){
        return res.status(401).json({message:"Authentication token is missing"})
    }
    try {
        const decode=jwt.verify(token, process.env.JWT_SECRET);
        req.user=await userModel.findById(decode.id).select("-password")
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}