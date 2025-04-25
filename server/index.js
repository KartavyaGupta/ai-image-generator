import * as dotenv from "dotenv";

dotenv.config(); // ✅ FIRST, load env vars

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import PostRouter from "./routes/Posts.js";
import generateImageRoute from "./routes/GenerateImage.js";

const app = express();

// ── middleware ───────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// ── routes ───────────────────────────────────────────────
app.use("/api/post", PostRouter);

app.use("/api/generateImage", generateImageRoute);

app.get("/", (req, res) =>
  res.status(200).json({ message: "Hello GFG developer" })
);

// ── central error handler ────────────────────────────────
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).json({ success: false, status, message });
});

// ── DB + server bootstrap ────────────────────────────────
async function connectDB() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("✅  MongoDB connected");
}

(async function startServer() {
  try {
    await connectDB();
    const PORT = 8081;
    app.listen(PORT);
  } catch (err) {
    console.error("❌  Failed to start server", err);
    process.exit(1);
  }
})();
