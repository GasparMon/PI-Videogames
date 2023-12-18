
const getGameById = require('../controllers/getGameById');
const getGameByName = require('../controllers/getGameByName');
const getGames = require('../controllers/getGames');
const getGenre = require('../controllers/getGenre');
const postGame = require('../controllers/postGame');
const postUser = require('../controllers/postUser');


const router = require('express').Router();

router.get("/videogames/name", getGameByName);
router.get("/videogames/:idVideogame", getGameById);
router.get("/videogames", getGames);
router.post("/login", postUser);
router.get("/genres", getGenre);
router.post("/videogames", postGame);


module.exports = router;
