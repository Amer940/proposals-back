"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("statuses", [
      {
        name: "Success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Denied",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ignored",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("statuses", null, {});
  },
};
