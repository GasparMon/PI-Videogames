const { User } = require("../db.js");

const postUser = async (req, res) => {
  try {
    const { username, email, password, avatar } = req.body;

    if (username && email && password && avatar) {
      const newUser = await User.findOrCreate({
        where: {username, email, password, avatar },
      });

      return res.status(200).send(newUser);
    }
    return res
      .status(400)
      .send("You must fill in all the data to create the user");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postUser;
