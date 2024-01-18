
const getGameById = require('../controllers/getGameById');
const getGameByName = require('../controllers/getGameByName');
const getGames = require('../controllers/getGames');
const getGenre = require('../controllers/getGenre');
const postGame = require('../controllers/postGame');
const postUser = require('../controllers/postUser');
const getUser = require('../controllers/getUser');
const deleteGame = require('../controllers/deleteGame');
const putUser = require('../controllers/putUser');
const getConnection = require('../controllers/getConnection');


const router = require('express').Router();

router.get("/connection", getConnection);
router.get("/videogames/name", getGameByName);
router.get("/videogames/:idVideogame", getGameById);
router.get("/videogames", getGames);
router.post("/submit", postUser);
router.post("/login", getUser);
router.get("/genres", getGenre);
router.post("/videogames", postGame);
router.delete("/videogames/:idVideogame", deleteGame);
router.put("/videogames/user", putUser)


module.exports = router;
