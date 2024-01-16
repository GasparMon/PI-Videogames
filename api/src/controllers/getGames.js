const { default: axios } = require("axios");
const { Videogame, Genres } = require("../db");
require("dotenv").config();

const apiKey = process.env.API_KEY;
const URL = process.env.URL;
let idPage = 1;
let GamesDB = [];

const getGames = async (req, res) => {
  try {
    while (idPage < 8) {
      const { data } = await axios.get(`${URL}?${apiKey}&page=${idPage}`);

      if (data.results) {
        data.results.forEach((element) => GamesDB.push(element))
       
      }

      idPage++;
    }

    if (GamesDB.length > 0) {
      const allGames = GamesDB.map((element) => {
        return {
          id: element.id,
          name: element.name,
          background_image: element.background_image,
          rating: element.rating,
          platforms: element.platforms,
          Genres: element.genres,
        };
      });

      const dbGames = await Videogame.findAll({
        include: {
          model: Genres,
          attributes: ['name'],
          through: { attributes: [] }
        },
      });

      dbGames.forEach((element) => allGames.unshift(element));

      return res.status(200).send(allGames);
    }

    return res.status(400).send(`Error to get data from ${URL}`);

  } catch (error) {
    
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = getGames;
