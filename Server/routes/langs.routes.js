import { Router } from "express";
import { getAllLangs, createLang } from "../controllers/langs.controller.js";

//--ROUTES--//
const langsRoutes = Router();

// http://localhost:4242/api/langs/getAllLangs
langsRoutes.get("/getAllLangs", getAllLangs);

// http://localhost:4242/api/langs/createLang
langsRoutes.post("/createLang", createLang);

export { langsRoutes };
