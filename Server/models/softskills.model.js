import { INTEGER, STRING } from "sequelize";
import { database } from "../config/context/database.js";

const SoftSkillsModel = database.define("hardSkills", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: STRING,
    allowNull: false,
  },
});

export { SoftSkillsModel };
