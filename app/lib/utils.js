import mongoose from "mongoose";

const url = process.env.MONGO

export const connectoToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return
    const db = await mongoose.connect(url);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
