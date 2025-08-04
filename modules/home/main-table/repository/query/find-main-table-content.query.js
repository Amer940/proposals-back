const { db } = require("../../../../../db");
const MainTable = db.main_proposals;
const Partners = db.partners;
const Statuses = db.statuses;

const findPaginatedFilteredMainTableContentQuery = async (
  page,
  pageSize,
  whereSelect,
  whereEmail
) => {
  return MainTable.findAndCountAll({
    where: whereSelect,
    attributes: ["id", "demand", "agreed"],
    include: [
      {
        model: Partners,
        attributes: ["id", "email"],
        where: whereEmail,
      },
      {
        model: Statuses,
        attributes: ["id", "name"],
      },
    ],
    limit: +pageSize,
    offset: +page * +pageSize,
  });
};

module.exports = { findPaginatedFilteredMainTableContentQuery };
