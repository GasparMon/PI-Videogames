const { Videogame} = require("../db");

const deleteGame = async (req, res) => {
  try {
    const { idVideogame } = req.params;
    console.log(req.params)

    const deletedGame = await Videogame.destroy({ where: { id: idVideogame } });

    if (deletedGame === 0) {
    
      return res.status(404).json({ message: "Videogame not found" });
    }

    return res.status(200).json({ message: "Videogame has been deleted", status:true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteGame;