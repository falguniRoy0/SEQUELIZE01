'use strict';
module.exports = (sequelize, DataTypes) => {
 const Passport = sequelize.define('Passport', {
    country: DataTypes.STRING,
    passportNumber: DataTypes.STRING,
    issueDate: DataTypes.DATE,
    expireDate: DataTypes.DATE
  }) 
  Passport.associate = function(models){
    Passport.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      as: 'passport'
    })
    // define association here
    //foo hasOne(bar)
    //bar belongsTo(foo)
  }
  return Passport;
};