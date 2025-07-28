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
    }
  }
  main_proposals.init(
    {
      email: DataTypes.STRING,
      demand: DataTypes.FLOAT,
      agreed: DataTypes.FLOAT,
      status: DataTypes.STRING,
      partner_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "main_proposals",
    }
  );
  return main_proposals;
};
