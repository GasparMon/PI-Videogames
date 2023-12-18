const { default: axios } = require("axios");
const { Genres } = require("../db");

require("dotenv").config();

const apiKey = process.env.API_KEY;
const URL = process.env.URL_GENRE;

const postGenre = async (req, res) => {
  try {
    const countGenre = await Genres.count();

    if (countGenre === 0) {
      const { data } = await axios.get(`${URL}?${apiKey}`);

      if (data) {
        const { results } = data;

        results.forEach(async (element) => {
          try {
            await Genres.findOrCreate({
              where: { name: element.name },
            });
          } catch (error) {
            res.status(500).send(error.message);
          }
        });
      }
    }

    res.status(200).send("Genres has been created");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postGenre;
