import{Request,Response,NextFunction} from "express"
import staffmodel from "../models/staffmodel";
import studentmodel from "../models/studentmodel";

export const addStaff=async(req:Request,res:Response)=>{
    const staff=await staffmodel.create(req.body)
    res.json({message:"Staff added",staff})
}
export const getStaff=async(req:Request,res:Response)=>{
    const staff=await staffmodel.find()
    res.json({message:"Staff List",staff})
}
export const getStafftById=async(req:Request,res:Response)=>{
    const staff=await staffmodel.findById(req.params.id);
    res.json({staff});
};

export const updateStaff=async(req:Request,res:Response)=>{
    const staff=await staffmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({message:"Updated",staff});
};

export const deleteStaff=async(req:Request,res:Response)=>{
    const staff=await staffmodel.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
};
export const getStudentUnderStaff=async(req:Request,res:Response)=>{
    const staff=await staffmodel.findById(req.params.id);
    if(!staff){
        return res.status(400).json({
            message:"Staff not found"
        })
    }
    const students=await studentmodel.find({course:staff.course})

    res.json({
        message:"Student under staff",
        staffCourse:staff?.course,
        totalStudent:students.length,
        students
    })
}
