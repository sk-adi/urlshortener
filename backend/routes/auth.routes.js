import express from "express";
import {
  loginUser,
  logOut,
  registerUser,
  verifyToken,
} from "../controllers/auth.controller.js";
import { validateLogin, validateRegistration } from "../middlewares/authSchema.middlewares.js";


const authRouter = express.Router();

authRouter.post("/register",validateRegistration, registerUser);

authRouter.post("/login",validateLogin, loginUser);

authRouter.post("/logout", logOut);

authRouter.post("/verify",verifyToken)


export { authRouter };
