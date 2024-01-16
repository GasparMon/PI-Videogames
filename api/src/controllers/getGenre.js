const postGenre = require("./postGenre");

const getGenre = async (req, res) => {
  
  try {
    const allGenres = await postGenre(req, res);

    return res.status(200).json(allGenres);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getGenre;
