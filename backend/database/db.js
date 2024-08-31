import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    console.log("MongoDB database connected ");
  } catch (error) {
    console.error("Error while connecting database " + error.message);
  }
};

export default DBConnection;
