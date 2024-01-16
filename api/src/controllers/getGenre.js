const postGenre = require("./postGenre");

const getGenre = async (req, res) => {
  try {
    const result = await postGenre();

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getGenre;