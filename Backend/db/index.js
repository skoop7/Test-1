import mongoose from "mongoose";

const ConnectDB = mongoose
  .connect("mongodb+srv://skobarne7:Saurabh123@cluster0.plvqk.mongodb.net/")
  .then(() => {
    console.log(`Connected to MONGODB Database`);
  });

export default ConnectDB;
