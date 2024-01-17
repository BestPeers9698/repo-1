const { Post } = require("../config/config");

const createPost = async (content,userId) => {
  try {
    const post = await Post.create({ content,userId });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to create user");
  }
};

module.exports = { createPost };