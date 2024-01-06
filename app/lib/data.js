import { Product, User } from "./models";
import { connectoToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;
  try {
    connectoToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    console.log(users);
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fecth users!");
  }
};

export const fetchSingleUser = async (id) => {
  try {
    connectoToDB();
    const singleUser = await User.findById(id);

    return singleUser;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fecth user!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;
  try {
    connectoToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fecth products!");
  }
};

export const fetchSingProduct = async (id) => {
  try {
    connectoToDB();
    const singleProduct = await Product.findById(id);

    return singleProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fecth product!");
  }
};
