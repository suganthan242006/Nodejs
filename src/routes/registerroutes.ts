import express from "express";
import{register,login}from"../controller/registerationController";
import {registervalidate } from "../middleware/registervalidator";
const router=express.Router();
router.post("/register",registervalidate,register);
router.post("/login",registervalidate,login);
export default router;
