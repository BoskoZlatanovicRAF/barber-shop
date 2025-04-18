'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Uslugas', 
    [
      {id: 1, Naziv: "Musko Sisanje", Cena: 1000, kategorijaId: 1},
      {id: 2, Naziv: "Zensko Sisanje", Cena: 1200, kategorijaId: 2},
      
    ]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Uslugas', null, {});
     
  }
};
