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
  class Zaposleni extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Kategorija, {foreignKey: 'kategorijaId', as: 'kategorija'});
      this.hasMany(models.ZakazanTermin, {foreignKey: 'zaposleniId', as: 'zaposleni'});
    }
  }
  Zaposleni.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Zaposleni',
    timestamps: false
  });
  return Zaposleni;
};