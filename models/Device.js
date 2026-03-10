import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  deviceName: String,
  deviceType: String, // "pc" or "mobile"
  status: {
    type: String,
    default: "offline"
  },
  lastSeen: Date
});

export default mongoose.model("Device", DeviceSchema);