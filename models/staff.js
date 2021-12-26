const Sequelize = require('sequelize');

module.exports = class Staff extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        staffId: {
            type: Sequelize.STRING(40),
            allowNull: false,
            primaryKey: true,
        },
        staffName: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        staffPassword: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        staffRank:{
            type: Sequelize.STRING(20),
            allowNull:false,
        },
        staffPhoneNumber:{
            type : Sequelize.STRING(100),
            allowNull : true,
        },
    },
    {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Staff',
        tableName: 'staffs',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
}

  static associate(db) {
    db.Staff.hasMany(db.User, { foreignKey: 'PIC', sourceKey: 'staffId' });
  }
};