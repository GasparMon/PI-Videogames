
const getGameById = require('../controllers/getGameById');
const getGameByName = require('../controllers/getGameByName');
const getGames = require('../controllers/getGames');
const getGenre = require('../controllers/getGenre');
const postGame = require('../controllers/postGame');
const postUser = require('../controllers/postUser');
const getUser = require('../controllers/getUser');
const deleteGame = require('../controllers/deleteGame');


const router = require('express').Router();

router.get("/videogames/name", getGameByName);
router.get("/videogames/:idVideogame", getGameById);
router.get("/videogames", getGames);
router.post("/submit", postUser);
router.post("/login", getUser);
router.get("/genres", getGenre);
router.post("/videogames", postGame);
router.delete("/videogames/:idVideogame", deleteGame);


module.exports = router;
