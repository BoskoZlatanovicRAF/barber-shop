'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ZakazanTermins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zakazanoVreme: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      adresa_radnje: {
        type: Sequelize.STRING
      },
      uslugaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Uslugas', // name of your model for usluga
          key: 'id',
        },
        onDelete: 'SET NULL'
      },
      zaposleniId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Zaposlenis', // name of your model for zaposleni
          key: 'id'
        },
        onDelete: 'SET NULL'
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Name of the Users table
          key: 'id', // Key in Users to which it refers
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', // or 'CASCADE' based on your requirement
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ZakazanTermins');
  }
};