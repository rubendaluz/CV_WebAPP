import { Router } from "express";
import {
  getAllContacts,
  createContact,
  deleteContact,
  editContact,
} from "../controllers/contacts.controller.js";

//--ROUTES--//
const contactsRoutes = Router();

// http://localhost:4242/api/contacts/getAllContacts
contactsRoutes.get("/getAllContacts", getAllContacts);

// http://localhost:4242/api/contacts/createContact
contactsRoutes.post("/createContact", createContact);

// http://localhost:4242/api/contacts/deleteContact/:id
contactsRoutes.delete("deleteContact/:id", deleteContact);

// http://localhost:4242/api/contacts/editContact/:id
contactsRoutes.post("/editContact/:id", editContact);

export { contactsRoutes };
