require('dotenv').config();
const { Sequelize } = require('sequelize');
const userBD = process.env.USER_DB;
const passwordBD = process.env.PASSWORD_DB;
const hostDB = process.env.DB_HOST;
const GenresModel = require("./models/Genres");
const UserModel = require("./models/User");
const VideogameModel = require("./models/Videogame");


const sequelize = new Sequelize(`postgres://${userBD}:${passwordBD}@${hostDB}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

GenresModel(sequelize);
UserModel(sequelize);
VideogameModel(sequelize);

const { User, Genres, Videogame } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

User.hasMany(Videogame, { foreignKey: 'UserId' });
Videogame.belongsTo(User, { foreignKey: 'UserId' });

Videogame.belongsToMany(Genres, { through: 'videogame_genre' });
Genres.belongsToMany(Videogame, { through: 'videogame_genre' });

module.exports = {
  User,
  Genres,
  Videogame,
  conn: sequelize,
};