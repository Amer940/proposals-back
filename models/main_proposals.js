"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class main_proposals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      main_proposals.belongsTo(models.partners, { foreignKey: "partner_id" });
      main_proposals.belongsTo(models.statuses, { foreignKey: "status_id" });
    }
  }
  main_proposals.init(
    {
      demand: DataTypes.FLOAT,
      agreed: DataTypes.FLOAT,
      paid: DataTypes.FLOAT,
      status_id: DataTypes.INTEGER,
      partner_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "main_proposals",
    }
  );
  return main_proposals;
};
