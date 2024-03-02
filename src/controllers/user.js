import db from "@/database";


// Function to create a new user
export const createUser = async (req, res) => {
  try {
    // Get al data from body request
    const { firstName, lastName,email, password } = req.body;

    // Create a new user in database
    const newUser = await db.models.user.create({
      firstName,
      lastName,
      email,
      password
    });

    // return a json data resonse
    return res.json({ success: true, data: newUser });
  } catch (error) {
    // Handle any error generated in execution time
    console.error(error);
    return res.status(500).json({ success: false, error: "Error al crear el usuario" });
  }
};
