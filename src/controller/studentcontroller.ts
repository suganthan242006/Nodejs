import { Request,Response } from "express";
import studentmodel from "../models/studentmodel";
import staffmodel from "../models/staffmodel";

export const addStudent = async (req: Request, res: Response) => {
  const staff = await staffmodel.findById(req.body.staffId);
  if (!staff) {
    return res.json({ message: "Staff not found" });
  }
  const studentCount = await studentmodel.countDocuments({
    staffId: staff._id
  });
  if (studentCount >= staff.maxStudents) {
    return res.json({ message: "Maximum students limit reached" });
  }
  const student = await studentmodel.create(req.body);

  res.json({ message: "Student added", student });
};

export const getStudent=async(req:Request,res:Response)=>{
    const student=await studentmodel.find()
    res.json({message:"Student List",student})
}
export const getStudentById=async(req:Request,res:Response)=>{
    const student=await studentmodel.findById(req.params.id);
    res.json({student});
};

export const updateStudent=async(req:Request,res:Response)=>{
    const student=await studentmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({message:"Updated",student});
};

export const deleteStudent=async(req:Request,res:Response)=>{
    const student=await studentmodel.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
};