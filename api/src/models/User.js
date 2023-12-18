const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(`User`, {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: [
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$",
        ],
        len: [8, 18],
      },
    },
    avatar:{
        type: DataTypes.ENUM(
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ),
        allowNull:false,
    }
  });
};
