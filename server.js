import express from "express";
import cors from "cors";
import "./database.js";
import userRoutes from "./routes/userRoutes.js";
import deviceRoutes from "./routes/deviceRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/devices", deviceRoutes);
app.get("/", (req, res) => {
  res.send("Remotex backend running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});