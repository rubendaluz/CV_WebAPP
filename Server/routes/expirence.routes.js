import { Router } from "express";
import {
  getAllExperiences,
  createExperience,
  deleteExperience,
  editExperience,
} from "../controllers/expirience.controller.js";

//--ROUTES--//
const experienceRoutes = Router();

// http://localhost:4242/api/expirences/getAllExperiences
experienceRoutes.get("/getAllExperiences", getAllExperiences);

// http://localhost:4242/api/expirences/createExperiences
experienceRoutes.post("/createExperiences", createExperience);

// http://localhost:4242/api/expirences/expereinces/:id
experienceRoutes.delete("/expereinces/:id", deleteExperience);

// http://localhost:4242/api/expirences/editExperiences/:id
experienceRoutes.post("/editExperiences/:id", editExperience);

export { experienceRoutes };
