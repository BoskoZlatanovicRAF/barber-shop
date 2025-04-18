'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ZakazanTermins',
      [
          {id: 1, zakazanoVreme: "2023-10-10 10:00", status: "zakazano", adresa_radnje: "Bulevar Kralja Aleksandra 73", uslugaId: 1, zaposleniId: 1},
          {id: 2, zakazanoVreme: "2023-10-10 12:00", status: "prihvaceno", adresa_radnje: "Bulevar Kralja Aleksandra 73", uslugaId: 2, zaposleniId: 2},
      ]);
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('ZakazanTermins', null, {});
  }
};
