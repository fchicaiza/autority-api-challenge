import { Router } from "express";

import * as homeController from "@/controllers/home";
import * as userController from "@/controllers/user";
import * as todoController from "@/controllers/todo";

const router = Router();

router.get("/", homeController.index);

// User routes
router.get("/health", homeController.healthCheck);

router.post("/user", userController.createUser);

router.get("/user", userController.getAllUsers);

router.get("/user/:id", userController.getUserById);

router.put("/user/:id", userController.updateUser);

router.delete("/user/:id", userController.deleteUser);

// Todo routes
router.post("/task", todoController.createTask);

router.get("/task", todoController.getAllTasks);

router.get("/task/:id", todoController.getTaskById);

router.put("/task/:id", todoController.updateTask);

export default router;
