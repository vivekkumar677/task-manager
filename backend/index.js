import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
import taskRoutes from "./routes/task.routes.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task Manager API is running");
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});