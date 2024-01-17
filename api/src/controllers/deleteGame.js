const { Videogame } = require("../db");

const deleteGame = async (req, res) => {
  try {
    const { idVideogame } = req.params;

    const deletedGame = await Videogame.destroy({ where: { id: idVideogame } });

    if (deletedGame !== 0) {
      return res.status(200).json({ status: true });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteGame;
