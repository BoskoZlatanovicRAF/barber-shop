'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Proizvods',
    [
      {id: 1, Naziv: "Gel za kosu",Opis: "Dobar gel za kosu bas dobar", Cena: 500},
      {id: 2, Naziv: "Sprej za kosu",Opis: "Dobar sprej za kosu bas dobar", Cena: 700},
      {id: 3, Naziv: "Fen",Opis: "Dobar fen za kosu bas dobar", Cena: 700},
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Proizvods', null, {});

  }
};
