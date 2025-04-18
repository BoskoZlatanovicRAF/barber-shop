'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategorijas',
    [
        {id: 1, Naziv: "Premium Barber"},
        {id: 2, Naziv: "Top Barber"},
        {id: 3, Naziv: "Standard Barber"}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategorijas', null, {});
  }
};
