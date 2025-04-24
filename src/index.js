import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" }) || 8000

const PORT = process.env.PORT 

connectDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running at localhost:${PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB Connection Error "+ err)
})


