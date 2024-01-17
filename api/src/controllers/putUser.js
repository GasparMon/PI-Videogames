const { User } = require("../db");

const putUser = async (req, res) => {
  try {
    const { id, updatedEmail, updatedPassword, newAvatar } = req.body;

    const response = await User.update(
      { email: updatedEmail, password: updatedPassword, avatar: newAvatar },
      { where: { id } }
    );

    if (response[0] === 1) {
      const userUpdate = await User.findByPk(id);

      return res.status(200).json(userUpdate);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = putUser;
