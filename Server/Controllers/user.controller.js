import { UserModel } from "../models/users.model.js";
import { createToken } from "../utils/jwt.js"; // Import the createToken function

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Usuário não existe" });
    }

    const token = createToken({
      id: user.id,
      username: user.username,
    });

    return res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Erro durante o login" });
  }
};

export { login };
