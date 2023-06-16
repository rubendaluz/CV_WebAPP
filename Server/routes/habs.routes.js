import { Router } from "express";
import {
  getAllHabs,
  createHab,
  deleteHab,
  editHab,
} from "../controllers/hab_literaria.controller.js";

//--ROUTES--//
const habsRoutes = Router();

// http://localhost:4242/api/habs/getAllHabs
habsRoutes.get("/getAllHabs", getAllHabs);

// http://localhost:4242/api/habs/createHab
habsRoutes.post("/createHab", createHab);

// http://localhost:4242/api/habs/deleteHab/:id
habsRoutes.delete("/deleteHab/:id", deleteHab);

// http://localhost:4242/api/habs/editHab/:id
habsRoutes.put("/editHab/:id", editHab);

export { habsRoutes };
