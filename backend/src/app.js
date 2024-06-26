// Import Section
import express from "express";
import "dotenv";
import "./config/database.config.js";
import "./config/cloudinary.config.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

// Configuration Section
const app = express();

// Middleware Section
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("dev")); // HTTP Request Logger
app.use(express.json()); // Add body in req Object - req.body
app.use(cookieParser()); // Add access to cookies in req Object - req.cookies

// Export Section
export { app };
