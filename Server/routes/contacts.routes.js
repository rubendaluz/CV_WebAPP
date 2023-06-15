import { Router } from "express";
import {
  getAllContacts,
  createContact,
} from "../controllers/contacts.controller.js";

//--ROUTES--//
const contactsRoutes = Router();

// http://localhost:4242/api/contacts/getAllContacts
contactsRoutes.get("/getAllContacts", getAllContacts);

// http://localhost:4242/api/contacts/createContact
contactsRoutes.post("/createContact", createContact);

export { contactsRoutes };
