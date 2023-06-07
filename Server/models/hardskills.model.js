import { INTEGER, STRING } from "sequelize";
import { database } from "../config/context/database.js";

const HardSkillsModel = database.define("hardSkills", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: STRING,
    allowNull: false,
  },
  descricao: {
    type: STRING,
    allowNull: false,
  },
});

export { HardSkillsModel };
