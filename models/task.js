'use strict';
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  })
  Task.associate = function(models){
    Task.belongsTo(models.User, {
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
  return Task;
};