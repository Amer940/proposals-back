const { db } = require("../../../../db");
const Movements = db.status_movement;

const fn = db.fn;
const col = db.col;
const literal = db.literal;

const getProposalsAnalyticsQuery = async () => {
  return await Movements.findAll({
    attributes: [
      [fn("DATE", col("updatedAt")), "date"],
      [fn("COUNT", literal(`CASE WHEN status_id = 3 THEN 1 END`)), "sent"],
      [fn("COUNT", literal(`CASE WHEN status_id = 1 THEN 1 END`)), "accepted"],
      [fn("COUNT", literal(`CASE WHEN status_id = 2 THEN 1 END`)), "denied"],
      [fn("COUNT", literal(`CASE WHEN status_id = 4 THEN 1 END`)), "ignored"],
    ],
    group: [fn("DATE", col("updatedAt"))],
    order: [[fn("DATE", col("updatedAt")), "ASC"]],
    raw: true,
  });
};

module.exports = { getProposalsAnalyticsQuery };
