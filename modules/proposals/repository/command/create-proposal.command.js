const { db } = require("../../../../db");
const Proposals = db.main_proposals;

const createProposalCommand = async (values) => {
  return Proposals.create({
    demand: values.demand,
    agreed: values.agreed,
    paid: values.paid,
    status_id: values.status_id,
    partner_id: values.partner_id,
  });
};

module.exports = { createProposalCommand };
