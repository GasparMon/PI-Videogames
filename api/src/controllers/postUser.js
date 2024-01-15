const { User } = require("../db.js");

const postUser = async (req, res) => {
  try {
    const { username, email, password, avatar } = req.body;

    const newUser = await User.findOrCreate({
      where: { username, email, password, avatar },
    });

    return res.status(200).send(newUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postUser;
