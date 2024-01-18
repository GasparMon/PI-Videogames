const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(`Server`, {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    connection: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: true,
    },
  }, {
    timestamps: false,
  });
};