import { getTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import express from "express";
import upload from "../config/multerConfig.js";

const router = express.Router();

// Create a new task
router.post("/", upload.single("pdf"), createTask);

// Get all tasks
router.get("/", getTasks);

// Update a task
router.patch("/:id", updateTask);

// Delete a task
router.delete("/:id", deleteTask);

export default router;
