const { db } = require("../../../../db");
const Partners = db.partners;

const Op = db.Op;
const fn = db.fn;
const literal = db.literal;
const col = db.col;

const getYearlyPartnerAnalyticsQuery = async () => {
  return await Partners.findAll({
    attributes: [
      [fn("DATE", col("createdAt")), "date"],
      [fn("COUNT", col("id")), "createdYearly"],
    ],
    group: [fn("DATE", col("createdAt"))],
    order: [[fn("DATE", col("createdAt")), "ASC"]],
  });
};

module.exports = { getYearlyPartnerAnalyticsQuery };
