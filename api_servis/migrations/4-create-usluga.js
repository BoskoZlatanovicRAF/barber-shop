'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Uslugas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Naziv: {
        type: Sequelize.STRING
      },
      Cena: {
        type: Sequelize.INTEGER
      },
      kategorijaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kategorijas', 
          key: 'id'
        },
        onDelete: 'SET NULL'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Uslugas');
  }
};