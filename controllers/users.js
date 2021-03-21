import UserModel from "../models/userModel.js";
import TodoModel from "../models/todoModel.js";
import bcrypt from "bcrypt";

const cleanUser = (user) => {
  const cleanedUser = {
    _id: user._id,
    username: user.username,
    email: user.email,
    score: user.score,
    todos: user.todos,
  };
  return cleanedUser;
};
export const getUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    // const cleanedUsers = [];
    // allUsers.forEach((user) => cleanedUsers.push(cleanUser(user)));
    res.send(allUsers);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPw = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username: username,
      email: email,
      hash: hashedPw,
    });
    await newUser.save();

    res.send(cleanUser(newUser));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  await UserModel.findByIdAndUpdate({ _id: id }, { score: data.newScore });
  const updatedUsers = await UserModel.find();
  res.send(updatedUsers);
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  await UserModel.findByIdAndDelete(id);

  const todos = await TodoModel.find({ user: id });
  await TodoModel.deleteMany({ _id: { $in: todos } });
  const rem_users = await UserModel.find();
  res.send(rem_users);
};
