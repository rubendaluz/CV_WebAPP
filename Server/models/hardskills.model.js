import { DataTypes } from "sequelize";
import { database } from "../config/context/database.js";

const HardSkillModel = database.define("HardSkill", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { HardSkillModel };
