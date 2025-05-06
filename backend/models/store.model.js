import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  merchant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  logoUrl: { type: String }
}, { timestamps: true });


export const storeModel = mongoose.model("Store", storeSchema);
