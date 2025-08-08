const { db } = require("../../../../db");
const Movements = db.paid_movements;

const Op = db.Op;
const fn = db.fn;
const literal = db.literal;
const col = db.col;

const getMonthlyMoneyAnalyticsQuery = async () => {
  return await Movements.findAll({
    attributes: [
      [fn("DATE", col("createdAt")), "date"],
      [fn("SUM", col("paid")), "months"],
    ],
    where: {
      createdAt: {
        [Op.gte]: literal("CURDATE() - INTERVAL 3 MONTH"),
      },
      paid: { [Op.ne]: 0 },
    },
    group: [fn("DATE", col("createdAt"))],
    order: [[fn("DATE", col("createdAt")), "ASC"]],
  });
};

module.exports = { getMonthlyMoneyAnalyticsQuery };
