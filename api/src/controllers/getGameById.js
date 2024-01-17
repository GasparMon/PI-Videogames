const axios = require("axios");
const { Videogame, Genres } = require("../db");
require("dotenv").config();

const apiKey = process.env.API_KEY;
const URL = process.env.URL;

const isUUID = (str) => {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(str);
};

const getGameById = async (req, res) => {
  try {
    let game = {};
    const { idVideogame } = req.params;

    if (isUUID(idVideogame)) {
      let data = await Videogame.findByPk(idVideogame, {
        include: Genres,
      });
      game = data.dataValues;
    } else {
      const { data } = await axios.get(`${URL}/${idVideogame}?${apiKey}`);

      if (data?.name) {
        const {
          id,
          name,
          description_raw,
          platforms,
          background_image,
          background_image_additional,
          released,
          rating,
          genres,
          metacritic,
        } = data;

        game = {
          id,
          name,
          description_raw,
          platforms,
          background_image,
          background_image_additional,
          released,
          rating,
          genres,
          metacritic,
        };
      }
    }

    if (game.id) {
      return res.status(200).json(game);
    }

    return res.status(404).send("The game has not been found in the database");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = getGameById;
