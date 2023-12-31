import { config } from "dotenv";
import mongoose from "mongoose";

config();

const MONGODB_URI = process.env.MONGODB_URI!;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export default connectDB;
