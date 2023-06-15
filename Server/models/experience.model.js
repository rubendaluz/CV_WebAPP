import { DataTypes } from "sequelize";
import { database } from "../config/context/database.js";

const ExperienceModel = database.define("Experiences", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entry_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  end_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  job: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: true,
  },
});

export { ExperienceModel };
