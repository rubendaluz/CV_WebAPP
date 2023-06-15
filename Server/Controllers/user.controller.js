import { UserModel } from "../models/users.model.js";
import { createToken } from "../utils/jwt.js"; // Import the createToken function

const login = async (req, res) => {
  const { username, password } = req.body;

  const url = "http://localhost:4242/api/user/login";

  const requestBody = { username, password };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// Middleware de autenticação
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, "your-secret-key", (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    req.userId = user.userId;
    next();
  });
};
export { login };
