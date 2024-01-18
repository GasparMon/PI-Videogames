const { Server } = require("../db");

const getConnection = async (req, res) => {
  try {
    console.log("Hola");
    const result = await Server.findOne({
      where: {
        connection: true,
      },
    });

    if (result) {
        const {connection} = result
      return res.status(200).json(connection);
    } else {
      return res.status(400).send("Error de conexión");
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getConnection;
