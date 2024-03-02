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
      userId,
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

// get a task by id
export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await db.models.todo.findByPk(taskId);
    return res.json({ success: true, status: 200, message: "No se ha encontrado la tarea solicitada",  data: task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al tratar de obtener la tarea seleccionada" });
  }
};

// update a task
export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { name, description, author, isComplete, userId } = req.body;
    const [rowCount, updatedTask] = await db.models.todo.update(
      { name, description, author, isComplete, userId },
      { where: { id: taskId }, returning: true }
    );
    if (rowCount === 0)
      return res
        .status(404)
        .json({ success: false, status: 404, error: "La tarea no se actualizó por que no fue encontrada" });
    return res.status(202).json({
      success: true,
      status: 202,
      message: "La tarea fue actualizada exitosamente",
      data: updatedTask[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al actualizar la tarea seleccionada" });
  }
};


//Function to delete a task
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const existingTask = await db.models.todo.findByPk(taskId);
    if (!existingTask) {
      return res.status(404).json({ success: false, status: 404, error: "La tarea no existe" });
    }
    const deletedTask = await db.models.todo.destroy({ where: { id: taskId } });
    return res
      .status(202)
      .json({ success: true, status: 202, message: "La tarea ha sido eliminada exitosamente", result: deletedTask });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al tratar de eliminar la tarea seleccionada" });
  }
};

