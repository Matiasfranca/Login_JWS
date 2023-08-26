import { Router } from "express";
import { auth } from "../controllers/authControl.js"; 
import { userControls } from "../controllers/userControls.js";

const adminRouter = Router();

adminRouter.get("/", auth, userControls.admin);
adminRouter.get("/free", auth, userControls.free)

export {adminRouter};
