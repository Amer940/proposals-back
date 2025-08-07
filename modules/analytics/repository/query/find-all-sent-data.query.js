const { Sequelize } = require("sequelize");
const { db, sequelize } = require("../../../../db");
const Proposals = db.main_proposals;

const getSentAnalyticsQuery = async () => {
  return await Proposals.sequelize.query(
    `
    SELECT DATE(updatedAt) AS date, COUNT(*) as sent
    FROM main_proposals
    WHERE status_id = 2
    GROUP BY DATE(updatedAt)
    ORDER BY DATE(updatedAt);
    `,
    {
      type: Sequelize.QueryTypes.SELECT,
    }
  );
};

module.exports = { getSentAnalyticsQuery };
