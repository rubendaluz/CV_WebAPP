import Router from "express";
import { login } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.js";
//--ROUTES--//
const usersRoutes = Router();

// http://localhost:4242/api/user/login
usersRoutes.post("/login", login);

// http://localhost:4242/api/user/auth
usersRoutes.get("/auth", verifyToken);

export { usersRoutes, verifyToken };
