import mongoose from "mongoose";

const urlCodeSchema=new mongoose.Schema(
    {
        urlCode:{
            type:String,
            required:true
        },
        originalUrl:{
            type:String,
            required:true,
            unique:true
        }
    }
    ,{timestamps:true})



    const shortUrl=mongoose.model("shortUrl",urlCodeSchema)


    export default shortUrl;