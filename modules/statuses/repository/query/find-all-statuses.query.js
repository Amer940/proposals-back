const { db } = require("../../../../db");
const Statuses = db.statuses;

const getAllStatusesQuery = async () => {
  return Statuses.findAll({
    attributes: ["id", "name"],
  });
};

module.exports = { getAllStatusesQuery };
