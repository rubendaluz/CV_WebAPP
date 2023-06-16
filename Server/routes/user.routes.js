import Router from "express";
import { login } from "../Controllers/user.controller.js";
// import {authRequired} from "C:\Users\User\Desktop\Desktop\Curso\Segundo Ano\Segundo Semestre\PW\Trabalho_Prático2\Server\utils\jwt.js"

//--ROUTES--//
const usersRoutes = Router();

// http://localhost:4242/api/user/login
usersRoutes.post("/login", login);

// http://localhost:4242/api/user/auth
// usersRoutes.get("/auth", authenticateToken);

export { usersRoutes };
