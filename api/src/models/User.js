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
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
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
        is: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/,
        len: [8, 18],
      },
    },
    avatar:{
        type: DataTypes.ENUM(
            "a1",
            "a2",
            "a3",
            "a4",
            "a5",
            "a6"
        ),
        allowNull:false,
    }
  });
};
