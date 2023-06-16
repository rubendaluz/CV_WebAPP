import { Router } from "express";
import {
  getAllSkills,
  createSkill,
  deleteSkill,
  editSkill,
} from "../controllers/hardskills.controller.js";

//--ROUTES--//
const skillsRoutes = Router();

// http://localhost:4242/api/skills/getAllSkills
skillsRoutes.get("/getAllSkills", getAllSkills);

// http://localhost:4242/api/skills/createSkill
skillsRoutes.post("/createSkill", createSkill);

// http://localhost:4242/api/skills/deleteSkill/:id
skillsRoutes.delete("/deleteSkill/:id", deleteSkill);

// http://localhost:4242/api/skills/editSkill/:id
skillsRoutes.put("/editSkill/:id", editSkill);

export { skillsRoutes };
