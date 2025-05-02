import express from "express"
import dotenv from "dotenv"
const app=express();
import bodyParser from "body-parser"
import cors from "cors"
import { connectdb } from "./db/index.js";

dotenv.config();
const PORT=process.env.PORT;

app.use(cors({
    origin:"http://localhost:5147", 
    credentials:true
}))
app.use(express.json());
app.use(bodyParser.json());

connectdb();

app.get("/", (req, res)=>{
    res.send("hi guys kaise ho")
})

app.listen(PORT, ()=>{
    console.log(`your app is listening to PORT no ${PORT}`)
})