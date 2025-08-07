const { db } = require("../../../../db");
const Proposals = db.main_proposals;

const Op = db.Op;
const fn = db.fn;
const literal = db.literal;
const col = db.col;

const getYearlyMoneyAnalyticsQuery = async () => {
  return await Proposals.findAll({
    attributes: [
      [fn("DATE", col("createdAt")), "date"],
      [fn("SUM", col("agreed")), "year"],
    ],
    group: [fn("DATE", col("createdAt"))],
    order: [[fn("DATE", col("createdAt")), "ASC"]],
  });
};

module.exports = { getYearlyMoneyAnalyticsQuery };
