import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export const loginUser = async (req, res) => {
  const userData = req.body;

  const currentUser = await userModel.findOne({ username: userData.username });
  if (!currentUser)
    res
      .status(400)
      .send(`User with the username ${req.body.username} doesn't exist`);

  try {
    const authenticated = await bcrypt.compare(
      req.body.password,
      currentUser.hash
    );
    console.log(authenticated);
    if (authenticated) {
      console.log(
        `User with the id ${currentUser._id} successfully authenticated`
      );
      res.send({
        _id: currentUser._id,
        username: currentUser.username,
        email: currentUser.email,
        score: currentUser.score,
      });
    }
  } catch (error) {
    res.status(400);
  }
};
