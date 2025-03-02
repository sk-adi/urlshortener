import express from "express";
import { shortTheUrl, urlRedirect } from "../controllers/url.controller.js";

const urlRoute = express.Router();

urlRoute.get("/:id", urlRedirect);

urlRoute.post("/shortcode", shortTheUrl);

export { urlRoute };
