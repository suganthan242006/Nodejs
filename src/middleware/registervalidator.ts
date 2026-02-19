import { Request,Response,NextFunction } from "express";
import {body,validationResult} from "express-validator";

export const validationRequest=(req:Request,res:Response,next:NextFunction)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.mapped()
            
        });
    }
    next();
};
 export const registervalidate=[body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid Email"),
    body("password")
    .notEmpty().withMessage("Password required")
    .isLength({min:8}).withMessage("Password must atleast 8 character"),
    validationRequest
 ]