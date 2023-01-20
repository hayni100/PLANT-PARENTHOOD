const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Plant extends Model {}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maxTemp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minTemp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idealLight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    toleratedLight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    watering: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //foreign key//
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "plant",
  }
);

module.exports = Plant;
