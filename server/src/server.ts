import { config } from "dotenv";
config();

import cors from "cors";
import express from "express";
import connectDB from "./config/db-connection";
import userRoutes from "./routes/users/user-routes";

const app = express();

const PORT = process.env.PORT || 5000;

// Use the cors middleware
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
  connectDB();
});
