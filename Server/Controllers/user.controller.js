import { UserModel } from "../models/users.model.js";
import { createToken, authRequired } from "../utils/jwt.js"; // Import the createToken function

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({
    where: {
      username: username,
      password: password,
    },
  });
  if (!user) {
    return res.status(401).json({ message: "User nao existe" });
  }
  const token = createToken({
    id: user.id,
    username: user.username,
    batatas: 2,
  }); // este payload, é o que futuramente vai estar dentro do req.user

  return res.json({
    token,
  });
};

// Middleware de autenticação
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    // Verificar e decodificar o token
    const decoded = authRequired(token, process.env.TOKEN_SECRET);

    // Passar o ID do usuário decodificado para as próximas rotas
    req.userId = decoded.userId;

    // Seguir para a próxima rota
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};
export { login, authenticateToken };
