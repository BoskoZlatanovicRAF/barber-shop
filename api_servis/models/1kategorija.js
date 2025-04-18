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
  class Kategorija extends Model {
    static associate(models) {
      this.hasMany(models.Usluga, { foreignKey: 'kategorijaId', as: 'uslugaKategorija' });
      this.hasMany(models.Zaposleni, { foreignKey: 'kategorijaId', as: 'zaposleniKategorija' });
    }
  }
  Kategorija.init({
    Naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Kategorija',
    timestamps: false
  });
  return Kategorija;
};