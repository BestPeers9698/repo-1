const postService = require('../services/postService');
const  {Post}  = require('../config/config');
const post =  async (req, res)=> {
    try {
      const { content, userId } = req.body;
  
      const post = await postService.createPost(content,userId)
  
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {post};