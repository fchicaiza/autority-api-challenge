import db from "@/database";

// Function to create a new task
export const createTask = async (req, res) => {
  try {
    const { name, description, author, isComplete, userId } = req.body;
    const newTask = await db.models.todo.create({
      name,
      description,
      author,
      isComplete,
      userId
    });
    return res.status(201).json({ success: true, status: 201, message: "Tarea creada exitosamente", data: newTask });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, status: 500, error: "Error al tratar de crear la tarea" });
  }
};

// function to get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await db.models.todo.findAll();
    return res.json({ success: true, status: 200, data: tasks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al tratar de obtener las tareas" });
  }
};
