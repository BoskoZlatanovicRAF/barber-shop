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
  class Usluga extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Kategorija, {foreignKey: 'kategorijaId', as: 'kategorija'});
    }
  }
  Usluga.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    Cena:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'Usluga',
    timestamps: false
  });
  return Usluga;
};