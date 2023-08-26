import { Router } from "express";
import { userControls } from "../controllers/userControls.js";
const userRouter = Router();

userRouter.post("/login", userControls.login);
userRouter.post("/register", userControls.register);

export {userRouter};