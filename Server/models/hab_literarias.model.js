import { DataTypes } from "sequelize";
import { database } from "../config/context/database.js";

const HabModel = database.define("Habs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  grade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  institute: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type_course: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_name: {
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
});

export { HabModel };
