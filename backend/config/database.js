import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, { dbName: "LMS_DB" });
    console.log("Database connected.");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
// import mongoose from "mongoose";

// const dbConnect = () => {
//   try {
//     mongoose.connect(process.env.DATABASE);
//     console.log("db connected successfull...");
//     mongoose.set("strictPopulate", false);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export default dbConnect;
