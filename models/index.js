const Sequelize = require('sequelize');
const User = require('./user');
const Staff = require('./staff');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;

db.User = User;
db.Staff = Staff;

User.init(sequelize);
Staff.init(sequelize);

User.associate(db);
Staff.associate(db);

module.exports = db;