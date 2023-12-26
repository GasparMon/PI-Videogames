const { User } = require("../db");

const putUser = async (req, res) => {
  try {
    const {id, updatedEmail, updatedPassword, newAvatar } = req.body;
    console.log(id)
    const user = await User.update(
        { email: updatedEmail, password: updatedPassword, avatar: newAvatar }, 
        { where: {id:id}}
        );

    return res.status(200).send("User has been updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports= putUser;
