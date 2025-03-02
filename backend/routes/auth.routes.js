import express from "express";
import {
  loginUser,
  logOut,
  registerUser,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

authRouter.post("/logout", logOut);



export { authRouter };
