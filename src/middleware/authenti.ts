import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
export interface AuthRequest extends Request {
         user?:any;
}

export const auth=(req:AuthRequest,res:Response,next:NextFunction)=>{
    const bearer=req.headers.authorization;

    if(!bearer){
        return res.status(401).json({message:"No token"});
    }

    const token=bearer.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Token Missing"});
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET!);
        req.user=decoded;
        next();
    }catch(error){
        return res.status(401).json({
            message:"Invalid token"
        });
    }
};