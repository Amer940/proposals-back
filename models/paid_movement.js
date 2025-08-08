"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class paid_movement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paid_movement.init(
    {
      proposal_id: DataTypes.INTEGER,
      paid: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "paid_movement",
      freezeTableName: true,
    }
  );
  return paid_movement;
};
