const { db } = require("../../../../db");
const Proposal = db.main_proposals;

const editProposalCommand = async (value) => {
  return Proposal.update(
    {
      demand: value.demand,
      agreed: value.agreed,
      paid: value.paid,
      status_id: value.status_id,
      partner_id: value.partner_id,
    },
    {
      where: { id: value.id },
    }
  );
};

module.exports = { editProposalCommand };
