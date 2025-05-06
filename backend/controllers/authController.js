import { check } from "express-validator"
import {userModel} from "../models/user.model.js"
import bcrypt from "bcrypt"
import { roleModel } from "../models/role.model.js";
import jwt from "jsonwebtoken"
import { storeModel } from "../models/store.model.js";

export const Register=async(req, res)=>{
    const {name, email , password , role}=req.body;
    console.log([name, email, password, role])
    try {

        if(!name || !email || !password || !role){
            return res.status(400).json({message:"All fields are required"})
        }

        const alreadyExists=await userModel.findOne({email});
        if(alreadyExists){
            return res.status(403).json({message:"user already exists"})
        }

        //lookup role by name
        const roleDoc=await roleModel.findOne({name:role})
        if(!roleDoc){
            return res.status(400).json({message:"Invalid role provided"})
        }

        //hash the password
        const hashPass=await bcrypt.hash(password, 10);
        
        const user=await userModel.create({
            name, 
            email, 
            password:hashPass, 
            role:roleDoc._id
        })  

        if(role==="merchant"){
            await storeModel.create({
                name:`${name}' Store`, 
                merchant:user._id, 
                description:"this is your store add products and sell it", 
            })
        }
        
        res.status(201).json({user});

    } catch (error) {
        return res.status(500).json({message:"Internel error while registering user"})
    }
}

export const Login=async(req, res)=>{
    const {email , password}=req.body;

    try {
        if(!email || !password){
            return res.status(400).json({message:"please enter both the password and email"})
        }

        const  user=await userModel.findOne({email}).populate("role");
        if(!user){
            return res.status(404).json({message:"user not found"})
        }

        //compare the password
        const isMatch=await bcrypt.compare(password, user.password);

        const payload = {
            id: user._id,          // Unique identifier for the user
            role: user.role.name,        // Role ID or role name (to manage access)
            email: user.email       // (optional) Helpful for verification/logging
          };

        //create a token
        const token=jwt.sign(payload, process.env.JWT_SECRET);

        res.status(200).json({user, token});
   
    } catch (error) {
        return res.status(500).json({message:"internel server error while logging user"})
    }
}