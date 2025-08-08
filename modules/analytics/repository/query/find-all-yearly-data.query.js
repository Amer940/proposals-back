const { db } = require("../../../../db");
const Movements = db.paid_movement;

const Op = db.Op;
const fn = db.fn;
const col = db.col;

const getYearlyMoneyAnalyticsQuery = async () => {
  return await Movements.findAll({
    attributes: [
      [fn("DATE", col("createdAt")), "date"],
      [fn("SUM", col("paid")), "year"],
    ],
    where: {
      paid: { [Op.ne]: 0 },
    },
    group: [fn("DATE", col("createdAt"))],
    order: [[fn("DATE", col("createdAt")), "ASC"]],
  });
};

module.exports = { getYearlyMoneyAnalyticsQuery };
