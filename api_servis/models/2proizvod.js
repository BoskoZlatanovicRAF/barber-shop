'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  class Proizvod extends Model {
    static associate(models) {
      // define association here
      
    }
  }
  Proizvod.init({
    Naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    Opis:{
      type: DataTypes.STRING(120),
      allowNull: true
    },
    
    Cena:{
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Proizvod',
    timestamps: false
  });
  return Proizvod;
};