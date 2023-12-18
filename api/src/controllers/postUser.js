const { User } = require("../db.js");

const postUser = async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;

    if (name && email && password && avatar) {
      const newUser = await User.findOrCreate({
        where: { name, email, password, avatar },
      });

      return res.status(200).json(newUser);
    }

    return res
      .status(400)
      .send("You must fill in all the data to create the user");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postUser;
