const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';


const config = require('./configs.js')[env];

let sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password, 
    {
        host: config.host,
        dialect: config.dialect,
        port: config.port,
    //     define: {
    //         hooks:{
    //             beforeBulkUpdate: (model, options) => {
    //                 delete model.attributes.id;
    //         }
    //     }
    // }
  } 
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
