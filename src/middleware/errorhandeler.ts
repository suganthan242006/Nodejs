import { Request,Response,NextFunction } from "express";

export const error=async(req:Request,res:Response,next:NextFunction)=>{
    res.status(400).json({message:error||"Server Error"})
}