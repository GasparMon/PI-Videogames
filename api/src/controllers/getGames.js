const { default: axios } = require("axios");
const { Videogame, Genres } = require("../db");
require("dotenv").config();

const apiKey = process.env.API_KEY;
const URL = process.env.URL;
let idPage = 1;
let GamesDB = [];

const getGames = async (req, res) => {
  try {
    while (idPage < 10) {
      const { data } = await axios.get(`${URL}${apiKey}&page=${idPage}`);

      if (data.results) {
        GamesDB.push(data.results[0]);
      }

      idPage++;
    }

    if (GamesDB.length > 0) {
      const allGames = GamesDB.map((element) => {
        return {
          id: element.id,
          name: element.name,
          released: element.released,
          background_image: element.background_image,
          rating: element.rating,
          metacritic: element.metacritic,
          platforms: element.platforms,
          genres: element.genres,
          short_screenshots: element.short_screenshots,
        };
      });

      const dbGames = await Videogame.findAll({
        include: Genres,
      });

      dbGames.forEach((element) => allGames.push(element));

      return res.status(200).send(allGames);
    }

    return res.status(400).send(`Error to get data from ${URL}`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getGames;
