import  express  from "express";
import { addCourse } from "../controller/courseController";
import {auth}from"../middleware/authenti";
import { adminOnly } from "../middleware/adminOnly";

const router=express.Router();

router.post("/",auth,adminOnly,addCourse);
export default router;