import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;