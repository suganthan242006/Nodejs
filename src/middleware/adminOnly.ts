import { Response,NextFunction } from "express";
import { AuthRequest } from "./authenti"
export const adminOnly=(Req:AuthRequest,res:Response,next:NextFunction)=>{
    if(Req.user?.role!=="admin"){
        console.log(Req.user?.role)
        return res.status(403).json({message:"a Admin access only"})
    }
    next();
}