import express from "express";
import {connectDB} from "../Staffs_intro/src/config/db"
import dotenv from "dotenv"
import registerRoutes from "../Staffs_intro/src/routes/registerroutes"
import staffRoutes from "../Staffs_intro/src/routes/staffrouts"
import studentRoutes from "../Staffs_intro/src/routes/studentroutes"
import courseRoutes from "../Staffs_intro/src/routes/courseroutes";
const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/auth",registerRoutes);
app.use("/api/staff",staffRoutes);
app.use("/api/student",studentRoutes)
app.use("/api/course",courseRoutes)

app.listen(process.env.PORT,()=>console.log("Server running on port 5000(TS)"));
