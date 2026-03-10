import mongoose from "mongoose";

const PairTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  deviceId: { type: String, required: true },
  expiresAt: { type: Date, required: true }
});

export default mongoose.model("PairToken", PairTokenSchema);