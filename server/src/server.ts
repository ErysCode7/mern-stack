import { connectDB } from "@/config/database";
import { userRoutes } from "@/routes/users";
import cors from "cors";
import { config } from "dotenv";
import express from "express";

config();

const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// USERS ROUTES
app.use("/users", userRoutes);

// PORT
app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
  connectDB();
});
