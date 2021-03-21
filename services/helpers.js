import TodoModel from "./../models/todoModel.js";
import UserModel from "./../models/userModel.js";

export const addDays = (date, days) => {
  const myDate = new Date();
  myDate.setDate(date.getDate() + days);
  return myDate;
};

var week = 0;
export const addTodos = async () => {
  const startDate = new Date();
  const endDate = addDays(startDate, 6);
  const andreas = await UserModel.findOne({ username: "Andreas" });
  const sven = await UserModel.findOne({ username: "Sven" });
  const julian = await UserModel.findOne({ username: "Julian" });
  if (week % 3 === 0) {
    const afg1 = new TodoModel({
      title: "Küche",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: andreas._id,
    });

    const afg2 = new TodoModel({
      title: "Bad",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: julian._id,
    });

    const afg3 = new TodoModel({
      title: "Gang",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: sven._id,
    });
    await afg1.save();
    await afg2.save();
    await afg3.save();
  }

  if (week % 3 === 1) {
    const afg1 = new TodoModel({
      title: "Küche",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: sven._id,
    });

    const afg2 = new TodoModel({
      title: "Bad",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: andreas._id,
    });

    const afg3 = new TodoModel({
      title: "Gang",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: julian._id,
    });
    await afg1.save();
    await afg2.save();
    await afg3.save();
  }

  if (week % 3 === 2) {
    const afg1 = new TodoModel({
      title: "Küche",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: julian._id,
    });

    const afg2 = new TodoModel({
      title: "Bad",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: sven._id,
    });

    const afg3 = new TodoModel({
      title: "Gang",
      completed: false,
      assignedOn: startDate,
      expiresOn: endDate,
      timeSpent: 45,
      user: andreas._id,
    });
    await afg1.save();
    await afg2.save();
    await afg3.save();
  }
  week++;
  console.log(week);
};
