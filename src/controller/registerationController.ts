import { Request,Response } from "express";
import User from"../models/registeration";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register=async(req:Request,res:Response)=>{
    const{username,email,password,role}=req.body;

    const hashedpassword=await bcrypt.hash(password,10);

    const user=await User.create({
        username,
        email,
        password:hashedpassword,
        role:role||"Staff"
    });
    return res.json({message:"User Registered",user});
};

export const login= async(req:Request,res:Response)=>{
    const{email,password}=req.body;

    const user=await User.findOne({email});
    if(!user)return (res.status(400).json({message:"User Not Found"}));

    const match=await bcrypt.compare(password,user.password);
    if(!match)return res.status(400).json({message:"Wrong Password"});

    const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET!,{expiresIn:"1h"});
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        maxAge:60*60*1000
    });
    res.json({message:"Login Successfull",token,role:user.role})
};