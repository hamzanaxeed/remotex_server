import mongoose from "mongoose";

console.log("Mongo URI:", process.env.MONGO_URI); // should print your connection string

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));