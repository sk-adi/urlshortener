import mongoose from "mongoose";

const connectDB=async()=>{

    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
       console.log(`Database connected at ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Error in connection database ! Error: ${error}`)
    }
}


export default connectDB;