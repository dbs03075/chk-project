const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      user_picture:{
        type : Sequelize.STRING(100),
        allowNull : true,
      },
      info:{
        type : Sequelize.STRING(100),
        allowNull : true,
      },
      vehicle_type:{
        type : Sequelize.STRING(30),
        allowNull : false,
        defaultValue : '도보',
      },
      phone_number:{
          type : Sequelize.STRING(100),
          allowNull : true,
      },
      phone_number_family:{
          type : Sequelize.STRING(100),
          allowNull: true,
      }, 
      phone_number_house:{
        type : Sequelize.STRING(100),
        allowNull: true,
    }, 
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.belongsTo(db.Staff, { foreignKey: 'PIC', sourceKey: 'staffId' });
  }
};