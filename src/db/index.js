import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connected!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("Error in DB connection: ", err);
    process.exit(1);
  }
}

export default connectDB;
