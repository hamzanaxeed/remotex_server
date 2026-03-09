import dotenv from "dotenv";
dotenv.config(); // load .env first

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Import database **after** dotenv.config()
import("./database.js"); // dynamic import ensures dotenv runs first

app.get("/", (req, res) => {
  res.send("Remotex backend running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});