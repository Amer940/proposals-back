const { db } = require("../../../../db");
const {
  generateWhereForSelectGet,
  generateWhereForEmailGet,
} = require("../factory/generateWhereForGetFromQuery");
const {
  deleteProposalCommand,
} = require("../repository/command/delete-proposal.command");
const {
  findPaginatedFilteredMainTableContentQuery,
} = require("../repository/query/find-main-table-content.query");

const getTableData = async (req, res) => {
  const values = req.query;

  try {
    const whereSelect = generateWhereForSelectGet(values.status);
    const whereEmail = generateWhereForEmailGet(values.email);

    const data = await findPaginatedFilteredMainTableContentQuery(
      values.page,
      values.pageSize,
      whereSelect,
      whereEmail
    );

    if (!data || data.length === 0) {
      res.status(404).json({ message: "No data found in the table" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json("Error happened while fetching main table data.");
  }
};

const deleteProposal = async (req, res) => {
  const values = req.params;

  try {
    await deleteProposalCommand(values.id);

    res.status(204).json({ message: "Proposal succesffully deleted." });
  } catch (err) {
    console.log(err);
    res.status(400).json("Error happened while fetching proposal table data.");
  }
};

module.exports = {
  getTableData,
  deleteProposal,
};
