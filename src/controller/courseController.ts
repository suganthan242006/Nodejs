import { Request,Response } from "express";
import coursemodel from "../models/coursemodel";

export const addCourse=async(req:Request,res:Response)=>{
    const {courseName,staffId}=req.body;
    const course=await coursemodel.create({courseName,staffId})
    res.json({message:"course added",course})
}