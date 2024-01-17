const { default: axios } = require("axios");
const { Genres } = require("../db");

require("dotenv").config();

const apiKey = process.env.API_KEY;
const URL = process.env.URL_GENRE;

const postGenre = async () => {
  try {
    const countGenre = await Genres.count();

    if (countGenre === 0) {
      const { data } = await axios.get(`${URL}?${apiKey}`);

      if (data) {

        const { results } = data;

        const promises = results.map(async (element) => {
          try {
            await Genres.findOrCreate({
              where: { name: element.name },
            });
          } catch (error) {
            throw new Error(error.message);
          }
        });

        await Promise.all(promises);

        return "Genres has been created";
      }
    }
    return "Genres already exist";
    
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postGenre;
