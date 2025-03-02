import express from "express"
import { urlRedirect } from "../controllers/url.controller.js"

const urlRoute=express.Router()

urlRoute.get('/:id',urlRedirect)


export { urlRoute }