const Sequelize = require("sequelize");
const UserModel = require('../models/User');
const CommentModel = require('../models/comment');
const PostModel = require('../models/post');
const LikeModel = require('../models/like');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'new-db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'new-shoot',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    retry: {
      max: 5, 
      timeout: 3000, 
    },
  },
 
);

const User = UserModel(sequelize);
const Comment = CommentModel(sequelize);
const Like = LikeModel(sequelize);
const Post = PostModel(sequelize);

User.associate({Post,Comment,Like});
Post.associate({User,Comment,Like});
Comment.associate({User,Post})
Like.associate({User,Post});

module.exports = { sequelize,User,Comment,Like,Post};
