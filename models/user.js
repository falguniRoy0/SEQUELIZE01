'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })
  User.associate = function(models){
    User.hasOne(models.Passport, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      as: 'passport'
    })
    // define association here
    User.hasMany(models.Task, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      as: 'task'
    })
    
    // define association here
    //foo hasOne(bar)
    //bar belongsTo(foo)
  }
  return User;
};