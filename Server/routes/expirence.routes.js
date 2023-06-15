import { Router } from "express";
import {
  getAllExperiences,
  createExperience,
} from "../controllers/expirience.controller.js";

//--ROUTES--//
const experienceRoutes = Router();

// http://localhost:4242/api/expirences/getAllExperiences
experienceRoutes.get("/getAllExperiences", getAllExperiences);

// http://localhost:4242/api/expirences/createExperiences
experienceRoutes.post("/createExperiences", createExperience);

export { experienceRoutes };
