const { User } = require("../db.js");

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await User.findOne({
      where: {
        email,
      },
    });

    if (userData) {
      const isPasswordValid = userData.password === password;

      if (isPasswordValid) {
        return res.status(200).json({ user: userData });
      } else {
        return res.status(400).json({ error: "Incorrect Password" });
      }
    } else {
      return res.status(404).json({ error: "User Not Found" });
    }
  } catch (error) {
    console.error("Error in getUser:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getUser;
