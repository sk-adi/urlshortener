import express from "express";
import {
  loginUser,
  logOut,
  registerUser,
} from "../controllers/auth.controller.js";
import {  validateLogin, validateRegistration } from "../middlewares/auth.middlewares.js";

const authRouter = express.Router();

authRouter.post("/register",validateRegistration, registerUser);

authRouter.post("/login",validateLogin, loginUser);

authRouter.post("/logout", logOut);



export { authRouter };
