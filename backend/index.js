import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task Manager API is running");
});

await connectDB();

export default app;