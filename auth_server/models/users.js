'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
      static associate(models) {
      // define association here
        // this.hasMany(models.zakazanTermin, {foreignKey: 'userId', as: 'zakazanTermin'});
      }
  };
Users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Nije email"
        }
      }
    }
  },
  {
    sequelize,
    modelName: 'Users',
    timestamps: false
  });
  return Users;
};