import TodoModel from "./../models/todoModel.js";
import UserModel from "./../models/userModel.js";
import { addTodos } from "./../services/helpers.js";
import schedule from "node-schedule";

export const getTodos = async (req, res) => {
  try {
    const allTodos = await TodoModel.find();
    res.send(allTodos);
  } catch (error) {
    console.log("try failed", error);
  }
};

export const createTodo = async (req, res) => {
  try {
    const {
      assignedOn,
      description,
      expiresOn,
      timeSpent,
      title,
      username,
    } = req.body;
    const assignedUser = await UserModel.findOne({ username: username });
    const newTodo = new TodoModel({
      title: title,
      description: description,
      // completed: false,
      assignedOn: assignedOn,
      expiresOn: expiresOn,
      timeSpent: timeSpent,
      user: assignedUser._id,
    });
    newTodo.save();
    res.send(newTodo);
  } catch (error) {
    console.log("try failed", error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { newtime } = req.body;
    console.log(req.body);
    console.log(newtime);
    if (newtime) {
      console.log("if");
      const updatedTodo = await TodoModel.findByIdAndUpdate(
        { _id: id },
        {
          ...data,
          completed: data.completed,
          timeSpent: newtime,
        },
        { new: true }
      );
      const updatedTodos = await TodoModel.find();
      res.send({ updatedTodos, updatedTodo });
    } else {
      console.log("else");
      const updatedTodo = await TodoModel.findByIdAndUpdate(
        { _id: id },
        { completed: !data.completed, completedOn: new Date() },
        { new: true }
      );
      const updatedTodos = await TodoModel.find();
      res.send({ updatedTodos, updatedTodo });
    }
  } catch (error) {
    console.log("try failed", error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await TodoModel.findByIdAndDelete(id);
    const remainingTodos = await TodoModel.find();

    res.send(remainingTodos);
  } catch (error) {
    console.log("try failed", error);
  }
};

const myJob = schedule.scheduleJob("* * * * * 1", function () {
  try {
    addTodos();
    console.log("cron job ran successfully");
  } catch (error) {
    console.log("cron job failed");
    console.log(error);
  }
});
