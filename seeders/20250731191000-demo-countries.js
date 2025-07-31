"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("countries", [
      {
        name: "Bosnia and Herzegovina",
        short_name: "BA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "United States of America",
        short_name: "USA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Australia",
        short_name: "AUS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("countries", null, {});
  },
};
