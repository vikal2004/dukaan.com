import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  merchant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  logoUrl: { type: String },
  theme: { type: String, default: "default" },
  isActive: { type: Boolean, default: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }
}, { timestamps: true });

export const storeModel = mongoose.model("Store", storeSchema);
