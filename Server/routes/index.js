import Router from "express";
import { usersRoutes } from "./user.routes.js";
import { profileRoutes } from "./profile.routes.js";
import { contactsRoutes } from "./contacts.routes.js";
import { langsRoutes } from "./langs.routes.js";
import { skillsRoutes } from "./hardskills.routes.js";
import { experienceRoutes } from "./expirence.routes.js";
import { habsRoutes } from "./habs.routes.js";

const api = Router();

// http://localhost:4242/api/user ....
api.use("/user", usersRoutes);

// http://localhost:4242/api/profile ....
api.use("/profile", profileRoutes);

// http://localhost:4242/api/contacts ....
api.use("/contacts", contactsRoutes);

// http://localhost:4242/api/langs ....
api.use("/langs", langsRoutes);

// http://localhost:4242/api/langs ....
api.use("/skills", skillsRoutes);

// http://localhost:4242/api/expirences ....
api.use("/experiences", experienceRoutes);

// http://localhost:4242/api/habs ....
api.use("/habs", habsRoutes);

export { api };
