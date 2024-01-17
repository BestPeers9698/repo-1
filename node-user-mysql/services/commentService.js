const { Comment } = require("../config/config");

const createComment = async (content,userId,postId) => {
  try {
    const comment = await Comment.create({ content,
        userId:userId,
        postId:postId
     });
    return comment;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to create user");
  }
};

module.exports = { createComment };