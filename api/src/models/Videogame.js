const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define(
    `Videogame`,
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [8, 25],
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [15, 250],
        },
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      background_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // short_screenshots: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      genres: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      released:{
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      rating:{
        type: DataTypes.FLOAT,
        allowNull:false,
        validate:{
          max: 5,
          min: 1
        }

      }
    },
    {
      timestamps: false,
    }
  );
};
