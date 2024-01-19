const Sequelize = require("sequelize");
const UserModel = require('../models/User');
const CommentModel = require('../models/comment');
const PostModel = require('../models/post');
const LikeModel = require('../models/like');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE ,
  process.env.DB_USER ,
  process.env.MYSQL_PASSWORD ,
  {
    host: process.env.DB_HOST,
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
