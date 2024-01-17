const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Comment.associate = (models)=>{
  Comment.belongsTo(models.User, {as:'user', foreignKey: 'userId' });
  Comment.belongsTo(models.Post, { as:'post',foreignKey: 'postId' });
}
return  Comment;
}

