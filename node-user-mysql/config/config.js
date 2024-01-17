const Sequelize = require("sequelize");
const UserModel = require('../models/User');
const CommentModel = require('../models/comment');
const PostModel = require('../models/post');
const LikeModel = require('../models/like');

const sequelize = new Sequelize(
  'new-db',
  'root',
  'new-shoot',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
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
