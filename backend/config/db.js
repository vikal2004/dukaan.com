import mongoose from "mongoose";

export async function connectdb(){
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("db connected successfully")
    } catch (error) {
        console.log("Error while connecting db", error)
    }
}
