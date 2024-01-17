
const userService = require("../services/userService");

const userController = async (req, res) => {
  try {
    const { username } = req.body;

    const user = await userService.createUser(username);

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { userController };

