import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import dbConnect from "../config/dbConnection.js";
import {
  userRoutes,
  courseRoutes,
  categoryRoutes,
  reviewRoutes,
} from "../routes/index.js";

// Database Connect...
dbConnect();

// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use("/", userRoutes);
app.use("/courses", courseRoutes);
app.use("/categories", categoryRoutes);
app.use("/reviews", reviewRoutes);

export default app;
