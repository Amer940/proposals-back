"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("main_proposals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      demand: {
        type: Sequelize.FLOAT,
      },
      agreed: {
        type: Sequelize.FLOAT,
      },
      paid: {
        type: Sequelize.FLOAT,
      },
      status_id: {
        type: Sequelize.INTEGER,
      },
      partner_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("main_proposals");
  },
};
