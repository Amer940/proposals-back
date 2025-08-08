const {
  generateWhereForSelectGet,
  generateWhereForEmailGet,
} = require("../factory/generateWhereForGetFromQuery");
const {
  createProposalCommand,
} = require("../repository/command/create-proposal.command");
const {
  deleteProposalCommand,
} = require("../repository/command/delete-proposal.command");
const {
  editProposalCommand,
} = require("../repository/command/update-proposal.command");
const {
  getInitialProposalValuesQuery,
} = require("../repository/query/find-initial-values-proposal.query");
const {
  findPaginatedFilteredMainTableContentQuery,
} = require("../repository/query/find-main-table-content.query");
const {
  checkDataForCreateProposal,
} = require("../validation/check-for-create-proposal-schema.api");
const {
  checkDataForUpdateProposal,
} = require("../validation/check-for-update-proposal-schema.api");
const { checkParamId } = require("../validation/check-params-id-schema.api");

const getTableData = async (req, res) => {
  const values = req.query;

  try {
    const whereSelect = generateWhereForSelectGet(values.status);
    const whereName = generateWhereForEmailGet(values.name);

    const data = await findPaginatedFilteredMainTableContentQuery(
      values.page,
      values.pageSize,
      whereSelect,
      whereName
    );

    if (!data || data.length === 0) {
      res.status(404).json({ message: "No data found in the table" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const createProposal = async (req, res) => {
  try {
    const { value, error } = checkDataForCreateProposal.validate(req.body);

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const proposal = await createProposalCommand(value);

    if (!proposal) {
      res.status(400).json({ message: "Proposal was not created." });
      return;
    }

    res.status(201).json(proposal);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const editProposal = async (req, res) => {
  try {
    const { value, error } = checkDataForUpdateProposal.validate(req.body, {
      convert: true,
    });

    if (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
      return;
    }

    const proposal = await editProposalCommand(value);

    if (proposal === 0) {
      res.status(400).json({ message: "Proposal was not updated." });
      return;
    }

    res.status(200).json(proposal);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getInitialEditValues = async (req, res) => {
  try {
    const { value, error } = checkParamId.validate(req.params, {
      convert: true,
    });

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const initialValues = await getInitialProposalValuesQuery(value.id);

    if (!initialValues || initialValues.length === 0) {
      res.status(404).json({ message: "No initial values found." });
      return;
    }

    res.status(200).json(initialValues);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const deleteProposal = async (req, res) => {
  try {
    const { value, error } = checkParamId.validate(req.params, {
      convert: true,
    });

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    await deleteProposalCommand(value.id);

    res.status(204).json({ message: "Proposal succesffully deleted." });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getTableData,
  createProposal,
  editProposal,
  getInitialEditValues,
  deleteProposal,
};
