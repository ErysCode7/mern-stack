import { config } from "dotenv";
config();

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

const connectDB = async () => {
  try {
    const con = await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export default connectDB;
