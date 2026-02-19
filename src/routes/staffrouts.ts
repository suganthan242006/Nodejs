import express from "express";
import {auth}from"../middleware/authenti";
import { addStaff,getStaff,getStafftById,updateStaff,deleteStaff,getStudentUnderStaff} from "../controller/staffController";
import { adminOnly } from "../middleware/adminOnly";

const router=express.Router();

router.post("/",auth,adminOnly,addStaff);
router.get("/",auth,getStaff);
router.get("/:id",auth,getStafftById);
router.put("/:id",auth,adminOnly,updateStaff);
router.delete("/:id",auth,adminOnly,deleteStaff);
router.get("/:id/students",auth,getStudentUnderStaff)

export default router;
