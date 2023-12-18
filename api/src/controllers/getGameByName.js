const { Op } = require("sequelize");
const { Videogame } = require("../db");
const { default: axios } = require("axios");
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
    });

    if (filteredGames.count < 15) {
      let apiCount = 15 - filteredGames.count;

      const { data } = await axios.get(`${URL}${name}&${apiKey}`);

      if (data?.results) {
        const { results } = data;


        filteredGames.rows = filteredGames.rows.concat(
          results
            .slice(0, apiCount)
            .map(
              ({
                id,
                name,
                description,
                platforms,
                background_image,
                background_image_additional,
                released,
                rating,
                genres,
                metacritic,
              }) => ({
                id,
                name,
                description,
                platforms,
                background_image,
                background_image_additional,
                released,
                rating,
                genres,
                metacritic,
              })
            )
        );
      }
    }

    if(filteredGames.rows.length === 0){
        return res.status(400).send("We couldn't find any video games related to the given keywords")
    }

    const {rows} = filteredGames

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getGameByName;
