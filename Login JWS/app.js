import "dotenv/config";
import { userRouter, adminRouter } from "./routes/routes.js";
import mongoose from "mongoose";
import express from "express";
const app = express();

mongoose.connect(process.env.URLMONGO).then(()=>console.log("Mongodb connected")).catch(err=>console.log("Ocorreu um erro:",err))

app.use("/user", express.json(), userRouter);
app.use("/admin", express.json(), adminRouter);

app.listen(process.env.PORT, ()=>console.log("Server running"))
