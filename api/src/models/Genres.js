const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(`Genres`, {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  }, {
    timestamps: false,
  });
};