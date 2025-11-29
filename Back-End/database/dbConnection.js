import mongoose from "mongoose";

export const dbConnection = async () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
};
