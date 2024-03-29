import indexRouter from "@/routes/index";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "@/controllers/user";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "@/controllers/todo";

export default function (app) {
  app.use("/", indexRouter);

  // CRUD User Endpoints
  app.use("/user", createUser);

  app.use("/user", getAllUsers);

  app.use("/user/:id", getUserById);

  app.use("/user/:id", updateUser);

  app.use("/user/:id", deleteUser);

  // CRUD Todo Endpoints
  app.use("/task", createTask);

  app.use("/task", getAllTasks);

  app.use("/task/:id", getTaskById);

  app.use("/task/:id", updateTask);

  app.use("/task/:id", deleteTask);

}
