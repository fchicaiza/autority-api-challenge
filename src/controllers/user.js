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
    return res.json({ success: true, data: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al crear el usuario" });
  }
};

// function to get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await db.models.user.findAll();
    return res.json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al obtener usuarios" });
  }
};


// get a user by id
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await db.models.user.findByPk(userId);
    return res.json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al obtener el usuario por ID" });
  }
};

// update a user
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstName, lastName, email, password } = req.body;
    const updatedUser = await db.models.user.update(
      { firstName, lastName, email, password },
      { where: { id: userId } }
    );
    return res.json({ success: true, data: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al actualizar el usuario por ID" });
  }
};
