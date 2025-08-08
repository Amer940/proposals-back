const { db } = require("../../../../db");
const Partners = db.partners;

const Op = db.Op;
const fn = db.fn;
const literal = db.literal;
const col = db.col;

const getMonthlyPartnerAnalyticsQuery = async () => {
  return await Partners.findAll({
    attributes: [
      [fn("DATE", col("createdAt")), "date"],
      [fn("COUNT", col("id")), "created"],
    ],
    where: {
      createdAt: {
        [Op.gte]: literal("CURDATE() - INTERVAL 3 MONTH"),
      },
    },
    group: [fn("DATE", col("createdAt"))],
    order: [[fn("DATE", col("createdAt")), "ASC"]],
  });
};

module.exports = { getMonthlyPartnerAnalyticsQuery };
