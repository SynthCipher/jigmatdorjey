import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import siteRouter from "./routes/siteRoutes.js";
import newsletterRouter from "./routes/newsletterRoutes.js";

// APP CONFIG
const app = express();
const port = process.env.PORT || 8082;

// Connect to MongoDB
mongoose
  .connect(
    `${process.env.MONGODB_URI}/portfolio` ||
      "mongodb://localhost:27017/portfolio"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// MIDDLEWARE
app.use(express.json());

// Your frontend origin which is linked with this backend
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://jigmatdorjey.vercel.app",
  // "https://auth-o39rfryvr-jigmatdorjeys-projects.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "X-Requested-With", "Authorization"],
  })
);

// Routes
app.use("/api", siteRouter);
app.use("/api", newsletterRouter); // Add newsletter routes

app.get("/", (req, res) => {
  res.send("Server is Live");
});

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
