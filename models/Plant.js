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
      allowNull: false,
    },
    maxTemp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minTemp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idealLight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toleratedLight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    watering: {
      type: DataTypes.STRING,
      allowNull: false,
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
