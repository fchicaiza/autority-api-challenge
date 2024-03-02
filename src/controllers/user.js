import db from "@/database";

// Function to create a new user
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = await db.models.user.create({
      firstName,
      lastName,
      email,
      password,
    });
    return res.status(201).json({ success: true, status: 201, message: "Usuairo creado exitosamente", data: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, status: 500, error: "Error al tratar de crear el usuario" });
  }
};

// function to get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await db.models.user.findAll();
    return res.json({ success: true, status: 200, data: users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al tratar de obtener usuarios" });
  }
};

// get a user by id
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await db.models.user.findByPk(userId);
    return res.json({ success: true, status: 200, data: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al tratar de obtener el usuario por ID" });
  }
};

// update a user
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstName, lastName, email, password } = req.body;
    const [rowCount, updatedUser] = await db.models.user.update(
      { firstName, lastName, email, password },
      { where: { id: userId }, returning: true }
    );
    if (rowCount === 0) 
    return res.status(404).json({ success: false, status:404, error: "Usuario no encontrado" });
    return res.status(202).json({
      success: true,
      status: 202,
      message: "El usuario fue actualizado exitosamente",
      data: updatedUser[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al actualizar el usuario por ID" });
  }
};

//Function to delete a user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await db.models.user.destroy({ where: { id: userId } });
    return res
      .status(202)
      .json({ success: true, status: 202, message: "El usuario ha sido eliminado exitosamente", result: deletedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al eliminar el usuario por ID" });
  }
};
