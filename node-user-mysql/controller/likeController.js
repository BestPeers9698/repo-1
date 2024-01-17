const likeService = require('../services/likeService');

const like = async (req, res) => {
  try {
    const postId = req.params.postId;

    const like = await likeService.createLike(postId);

    res.json(like);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const likeCount = async (req, res) => {
  try {
    const postId = req.params.postId;

    const comments = await likeService.createLike(postId);

    res.json({ comments});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  like,
  likeCount,
};
