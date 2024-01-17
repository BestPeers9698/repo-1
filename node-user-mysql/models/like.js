const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
const Like = sequelize.define('Like', {});

Like.associate = (models)=>{
Like.belongsTo(models.User, { as:'user',foreignKey: 'userId' });
Like.belongsTo(models.Post, { as:'post',foreignKey: 'postId' });
}
return Like ;

}
