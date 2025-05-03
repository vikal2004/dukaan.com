import express from "express"
import dotenv from "dotenv"
const app=express();
import bodyParser from "body-parser"
import cors from "cors"
import { connectdb } from "./config/db.js";
import { authRouter } from "./routes/auth.route.js";
import { storeRouter } from "./routes/store.route.js";
import { productRouter } from "./routes/product.route.js";
import { cartRouter } from "./routes/cart.route.js";

dotenv.config();
const PORT=process.env.PORT;

app.use(cors({
    origin:"http://localhost:5147", 
    credentials:true
}))
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/stores", storeRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/cart", cartRouter)

connectdb();

app.get("/", (req, res)=>{
    res.send("hi guys kaise ho")
})

app.listen(PORT, ()=>{
    console.log(`your app is listening to PORT no ${PORT}`)
})