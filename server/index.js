import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./routes/book.routes.js"
import userRoute from "./routes/user.routes.js"
import cors from "cors"

dotenv.config()

const app=express()
const port = process.env.PORT || 8001
const MONGO_DB_URI=process.env.MONGO_DB_URI

app.use(express.json())

app.use(cors())

// connect to mongodb
async function dbConnected(){
    try {
       await mongoose.connect(MONGO_DB_URI)
            console.log("database is connected")
        
    } catch (error) {
        console.log("Error",error)
    }
}
dbConnected();


// define routes
app.use("/books",bookRoute)
app.use("/user",userRoute)

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})