import { DataTypes } from "sequelize";
import { database } from "../config/context/database.js";

const LangsModel = database.define("Langs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  exp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export { LangsModel };
