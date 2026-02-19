import express from "express";
import { auth } from "../middleware/authenti";
import{addStudent,getStudent,getStudentById,updateStudent,deleteStudent}from "../controller/studentcontroller";
import { StaffAdminOnly } from "../middleware/staffadmin";


const router=express.Router();

router.post("/",auth,StaffAdminOnly,addStudent);
router.get("/",auth,getStudent);
router.get("/:id",auth,getStudentById);
router.put("/:id",auth,StaffAdminOnly,updateStudent);
router.delete("/:id",auth,StaffAdminOnly,deleteStudent);

export default router;
