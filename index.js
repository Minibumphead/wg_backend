import express from "express";
import cors from "cors";
import UserRouter from "./routes/usersRouter.js";
import todosRouter from "./routes/todosRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// using this allows devs to access env variables stored in .env file. Access with process.senv.<varname>
dotenv.config();

// initialize app
const app = express();

//configure Port
const PORT = 5000;
mongoose
  .connect(process.env.DB_SECRET, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(() => console.log("asdfaldfadsf"));

//Set up middleware
app.use(cors());
app.use(express.json());

app.use("/users", UserRouter);
app.use("/todos", todosRouter);
app.get("/", (req, res) => res.send("<h1>Server running in production</h1>"));
