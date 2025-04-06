import mongoose from "mongoose";
require("dotenv").config();

const dbUrl: string = process.env.DB_URL || "";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(dbUrl);
    console.log(`✅ Database connected with ${connection.connection.host}`);
  } catch (error: any) {
    console.error(`❌ Database connection failed: ${error.message}`);
    setTimeout(connectDB, 5000); // Retry after 5 seconds
  }
};

export default connectDB;
