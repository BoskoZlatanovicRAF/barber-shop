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
  class ZakazanTermin extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Usluga, {foreignKey: 'uslugaId', as: 'usluga'});
      this.belongsTo(models.Zaposleni, {foreignKey: 'zaposleniId', as: 'zaposleni'});
    
      //User association
      this.belongsTo(models.Users, {foreignKey: 'userId', as: 'user'});
    }
  }
  ZakazanTermin.init({
      ZakazanoVreme: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Status:{
        type: DataTypes.STRING,
        allowNull: false
      },
      Adresa_radnje:{
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'ZakazanTermin',
    timestamps: false
  });
  return ZakazanTermin;
};