const { Videogame} = require("../db");

const postGame = async (req, res) => {
  try {
    const {
      name,
      description,
      platforms,
      background_image,
      // short_screenshots,
      genres, 
      released,
      rating,
      UserId,
    } = req.body;

    const newGame = await Videogame.create({
      name,
      description,
      platforms,
      background_image,
      // short_screenshots,
      genres,
      released,
      rating,
      UserId,
    });

    await newGame.addGenres(genres);

    return res.status(200).json(newGame);
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

module.exports = postGame;
