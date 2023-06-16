import { Router } from "express";
import {
  getAllLangs,
  createLang,
  deleteLang,
  editLang,
} from "../controllers/langs.controller.js";

//--ROUTES--//
const langsRoutes = Router();

// http://localhost:4242/api/langs/getAllLangs
langsRoutes.get("/getAllLangs", getAllLangs);

// http://localhost:4242/api/langs/createLang
langsRoutes.post("/createLang", createLang);

// http://localhost:4242/api/langs/deleteLang/:id
langsRoutes.delete("/deleteLang/:id", deleteLang);

// // http://localhost:4242/api/langs/editLang
langsRoutes.put("/editLang/:id", editLang);

export { langsRoutes };
