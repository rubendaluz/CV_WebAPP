import { DataTypes } from "sequelize";
import { database } from "../config/context/database.js";

const ProfileModel = database.define("Profile", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(2000),
    allowNull: false,
  },
});

export { ProfileModel };
