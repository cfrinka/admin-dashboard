import { User } from "./models";
import { connectoToDB } from "./utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectoToDB();
    const users = await User.find({ username: { $regex: regex } });
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fecth users!");
  }
};
