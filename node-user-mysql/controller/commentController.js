const commentService = require("../services/commentService");
const comments = async (req, res) => {
  try {
    const { content, userId } = req.body;
    const postId = req.params.postId;

    const comment = await commentService.createComment(content,userId,postId);

    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { comments };
