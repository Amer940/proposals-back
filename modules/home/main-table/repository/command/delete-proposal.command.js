const { db } = require("../../../../../db");
const MainTable = db.main_proposals;

const deleteProposalCommand = async (id) => {
  return MainTable.destroy({ where: { id } });
};

module.exports = { deleteProposalCommand };
