'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Zaposlenis',
    [
      {id: 1, Naziv: "Pera Peric", kategorijaId: 1},
      {id: 2, Naziv: "Mika Mikic", kategorijaId: 2}
    ]);
  },

  async down (queryInterface, Sequelize) {
      
      await queryInterface.bulkDelete('Zaposlenis', null, {});
  }
};
