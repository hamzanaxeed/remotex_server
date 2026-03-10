import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  supabaseId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  phone: String,
  email: String
});

export default mongoose.model("User", UserSchema);