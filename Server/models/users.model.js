import { DataTypes } from "sequelize";
import database from "../config/context/database";

const User = database.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { UserModel };
