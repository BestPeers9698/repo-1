const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
const Post = sequelize.define('Post', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


Post.associate = (models)=>{
Post.hasMany(models.Comment, { as:'comment',foreignKey: 'postId' });
Post.belongsTo(models.User, {as:'user' ,foreignKey: 'userId' });
Post.hasMany(models.Like, { as:'like',foreignKey: 'postId' });
}

return Post ;

}
