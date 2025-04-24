import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () =>{
    try {
        const connectionName = await mongoose.connect(`${process.env.MONGODB_url}/${DB_NAME}`)

        console.log("\n MongoDB Connected ! " + connectionName.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Error", error);
        process.exit(1)
    }
}

export default connectDB