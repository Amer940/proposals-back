"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("main_proposals", [
      {
        demand: 80,
        agreed: 80,
        status_id: 1,
        partner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        demand: 200,
        agreed: 0,
        status_id: 3,
        partner_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        demand: 500,
        agreed: 0,
        status_id: 2,
        partner_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("main_proposals", null, {});
  },
};
