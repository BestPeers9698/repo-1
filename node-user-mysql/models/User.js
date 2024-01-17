const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

module.exports = (sequelize)=>{
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
},
 { timestamps: false }
);

User.associate = (models)=>{
User.hasMany(models.Comment, {as:'comment', foreignKey: 'userId' });
User.hasMany(models.Post, { as:'post',foreignKey: 'userId' });
User.hasMany(models.Like, { as:'like',foreignKey: 'userId' });
}

return User ;
}