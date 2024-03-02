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

