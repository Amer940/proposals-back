const { db } = require("../../../../db");
const MainTable = db.main_proposals;
const Partners = db.partners;
const Statuses = db.statuses;

const fn = db.fn;
const col = db.col;

const findPaginatedFilteredMainTableContentQuery = async (
  page,
  pageSize,
  whereSelect,
  whereName
) => {
  return MainTable.findAndCountAll({
    where: whereSelect,
    attributes: ["id", "demand", "agreed", "paid"],
    include: [
      {
        model: Partners,
        attributes: ["id", "name"],
        where: whereName,
      },
      {
        model: Statuses,
        attributes: ["id", "name"],
      },
    ],
    order: [["createdAt", "DESC"]],
    limit: +pageSize,
    offset: +page * +pageSize,
  });
};

module.exports = { findPaginatedFilteredMainTableContentQuery };
