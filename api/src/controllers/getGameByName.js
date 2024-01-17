const { Op } = require("sequelize");
const { Videogame, Genres } = require("../db");
const { default: axios } = require("axios");
const { raw } = require("body-parser");
require("dotenv").config();

const apiKey = process.env.API_KEY;
const URL = process.env.URL_SEARCH;

const getGameByName = async (req, res) => {
  try {
    const { name } = req.query;

    const filteredGames = await Videogame.findAndCountAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
      include: Genres,
    });

    if (filteredGames.count < 15) {
      const { data } = await axios.get(`${URL}${name}&${apiKey}`);

      if (data?.results) {
        const { results } = data;

        filteredGames.rows = filteredGames.rows.concat(
          results.map(
            ({
              id,
              name,
              platforms,
              background_image,
              genres,
              released,
              rating,
              metacritic,
            }) => ({
              id,
              name,
              platforms,
              background_image,
              Genres: genres,
              released,
              rating,
              metacritic,
            })
          )
          // .filter(
          //   ({
          //     id,
          //     name,
          //     platforms,
          //     background_image,
          //     Genres,
          //     released,
          //     rating,
          //     metacritic,
          //   }) =>
          //     id !== null &&
          //     name !== null &&
          //     platforms.length !== 0 &&
          //     background_image !== null &&
          //     Genres.length !== 0 &&
          //     released !== null &&
          //     rating > 1 &&
          //     metacritic !== null
          // )
        );
      }
    }

    if (filteredGames.rows.length === 0) {
      return res
        .status(400)
        .send("We couldn't find any video games related to the given keywords");
    }

    const { rows } = filteredGames;

    const gamesbyName = rows.slice(0, 15);

    return res.status(200).json(gamesbyName);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = getGameByName;
