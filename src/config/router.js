import indexRouter from "@/routes/index";
import { createUser, getAllUsers, getUserById, updateUser } from "@/controllers/user";

export default function (app) {
  app.use("/", indexRouter); 

  app.use("/user", createUser);
  
  app.use("/user", getAllUsers);
  
  app.use("/user/:id", getUserById);
  
  app.use("/user/:id", updateUser)
}
