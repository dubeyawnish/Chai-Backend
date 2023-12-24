import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //this is middleware provided by express to parse json data
app.use(express.urlencoded({extended: true, limit: "16kb"})) // this is middleware parse url 
app.use(express.static("public"))
app.use(cookieParser())   //from this cookie parser we save the data in cookie from backend


import userRouter from './routes/userRouter.js'
app.use("/api/v1/users", userRouter);
export { app }