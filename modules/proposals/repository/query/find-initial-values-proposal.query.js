const { db } = require("../../../../db");
const Proposals = db.main_proposals;
const Partners = db.partners;
const Statuses = db.statuses;

const getInitialProposalValuesQuery = async (id) => {
  return Proposals.findOne({
    where: { id },
    include: [
      {
        model: Partners,
        attributes: ["id", "name"],
      },
      {
        model: Statuses,
        attributes: ["id", "name"],
      },
    ],
  });
};

module.exports = { getInitialProposalValuesQuery };
