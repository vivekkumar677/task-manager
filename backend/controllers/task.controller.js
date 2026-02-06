import TaskService from "../services/task.service.js";

const TaskServiceInstance = new TaskService();

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskServiceInstance.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

   const linkedFIle = req.file ? { data: req.file.buffer, contentType: req.file.mimetype } : null;

    const newTask = await TaskServiceInstance.create({
      title,
      description,
      deadline,
      linkedFIle
    });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskServiceInstance.update(id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskServiceInstance.delete(id);
    res.status(204).send(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
