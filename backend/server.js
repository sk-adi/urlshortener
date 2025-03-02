import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import { authRouter } from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import { urlRoute } from "./routes/url.routes.js"
import cors from "cors"


dotenv.config()

const app=express()

app.use(express.json())
app.use(cookieParser())

app.use(
    cors({
        origin:["http://localhost:5173","http://127.0.0.1:5173,https://url-one-flax.vercel.app/"],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true,
    })
)

connectDB()

app.use('/api/url',urlRoute)
app.use('/api/auth',authRouter)

app.use('/a',urlRoute)



app.get('/',(req,res)=>{
    res.json({message:`express is running`})
})






app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})