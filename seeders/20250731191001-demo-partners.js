"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("partners", [
      {
        name: "First partner",
        email: "first@email.com",
        country_id: 2,
        city: "Miami",
        description: "custom description of first partner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "second partner",
        email: "second@email.com",
        country_id: 1,
        city: "Miami",
        description: "custom description of second partner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("partners", null, {});
  },
};
