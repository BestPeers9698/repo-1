const { User,Post, Like,Comment } = require("../config/config");

const createLike = async (postId) => {
  try {
    const like = await Like.create({ postId});
    return like;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to create like");
  }
};

const createLikeCount = async (postId) => {
    try {
      const likeCount = await Comment.findAll({
        //where: { postId: postId },
        include: [
          {
            model: User,
            as: 'user',
            attributes: ["id", "username"],
          },
          {
            model: Post,
            as: "post",
            attributes: ["id", "content"],
          },
        ],
      });
  
      // const likesCount = await Like.count({
      //   where: { postId: postId },
      // });
      return likeCount;

    } catch (error) {
      console.error(error);
      throw new Error("Unable to create like");
    }
  };



module.exports = { createLike ,createLikeCount};