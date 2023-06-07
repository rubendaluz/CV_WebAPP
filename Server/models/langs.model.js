import { INTEGER, STRING } from "sequelize";
import { database } from "../config/context/database.js";

const LangsModel = database.define("langs", {
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

export { LangsModel };
