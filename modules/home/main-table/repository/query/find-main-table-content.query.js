const { db } = require("../../../../../db");
const MainTable = db.main_proposals;
const Partners = db.partners;
const Statuses = db.statuses;

const findMainTableContentQuery = async () => {
  return MainTable.findAll({
    attributes: ["id", "demand", "agreed"],
    include: [
      {
        model: Partners,
        attributes: ["id", "email"],
      },
      {
        model: Statuses,
        attributes: ["id", "name"],
      },
    ],
  });
};

module.exports = { findMainTableContentQuery };
