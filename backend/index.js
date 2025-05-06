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
import { merchantProductRouter } from "./routes/merchant/productRoutes.js";
import { merchantStoreRouter } from "./routes/merchant/storeRoutes.js";
import { merchantOrderRouter } from "./routes/merchant/orderRoutes.js";
import { merchantDashboardRouter } from "./routes/merchant/merchantRoutes.js";

dotenv.config();
const PORT=process.env.PORT;

app.use(cors({
    origin:"http://localhost:5173", 
    credentials:true
}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/stores", storeRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/cart", cartRouter)
app.use("/api/v1/merchant/products", merchantProductRouter);
app.use("/api/v1/merchant/store", merchantStoreRouter);
app.use("/api/v1/merchant/order", merchantOrderRouter);
app.use("/api/v1/merchantdashboard", merchantDashboardRouter)

connectdb();

app.get("/", (req, res)=>{
    res.send("hi guys kaise ho")
})

app.listen(PORT, ()=>{
    console.log(`your app is listening to PORT no ${PORT}`)
})