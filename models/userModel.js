import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  score: {
    type: Number,
    default: 0,
  },
  hash: String,
});

const UserModel = mongoose.model("User", UserSchema, "Users");

export default UserModel;
