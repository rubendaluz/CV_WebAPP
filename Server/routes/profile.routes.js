import { Router } from "express";
import { getAllProfile, editInfo } from "../controllers/profile.controller.js";

//--ROUTES--//
const profileRoutes = Router();

// http://localhost:4242/api/profile/getAllProfile
profileRoutes.get("/getAllProfile", getAllProfile);

// http://localhost:4242/api/profile/editInfo/:id
profileRoutes.put("/editInfo/:1", editInfo);

export { profileRoutes };
