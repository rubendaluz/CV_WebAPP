import { Router } from "express";
import {
  getAllSkills,
  createSkill,
} from "../controllers/hardskills.controller.js";

//--ROUTES--//
const skillsRoutes = Router();

// http://localhost:4242/api/skills/getAllSkills
skillsRoutes.get("/getAllSkills", getAllSkills);

// http://localhost:4242/api/skills/createSkill
skillsRoutes.post("/createSkill", createSkill);

export { skillsRoutes };
