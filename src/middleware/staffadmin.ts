import { Response,NextFunction } from "express";
import { AuthRequest } from "./authenti"
export const StaffAdminOnly=(Req:AuthRequest,res:Response,next:NextFunction)=>{
     //console.log(Req.user.role,"hello")
    if(Req.user.role!=="Staffadmin"){
        
        return res.status(403).json({message:"StaffAdmin access only"})
    }
    next();
}