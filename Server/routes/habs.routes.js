import { Router } from "express";
import {
  getAllHabs,
  createHab,
} from "../controllers/hab_literaria.controller.js";

//--ROUTES--//
const habsRoutes = Router();

// http://localhost:4242/api/habs/getAllHabs
habsRoutes.get("/getAllHabs", getAllHabs);

// http://localhost:4242/api/habs/createHab
habsRoutes.post("/createHab", createHab);

export { habsRoutes };
