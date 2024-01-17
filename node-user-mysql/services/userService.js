
const { User } = require("../config/config");

const createUser = async (username) => {
  try {
    const user = await User.create({ username });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to create user");
  }
};

module.exports = { createUser };
