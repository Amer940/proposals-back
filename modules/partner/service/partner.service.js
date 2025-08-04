const {
  generateWhereForPartner,
  generateWhereForCountry,
} = require("../factory/generateWhereForPartnerFromQuery");
const {
  deletePartnerCommand,
} = require("../repository/command/delete-partner.command");
const {
  findPaginatedFilteredPartnerTableContentQuery,
} = require("../repository/query/find-partner-table-content.query");

const getPartnerData = async (req, res) => {
  const values = req.query;

  try {
    const wherePartner = generateWhereForPartner(values);
    const whereCountry = generateWhereForCountry(values);

    const data = await findPaginatedFilteredPartnerTableContentQuery(
      values.page,
      values.pageSize,
      wherePartner,
      whereCountry
    );

    if (!data || data.length === 0) {
      res.status(404).json({ message: "No data found in the table" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json("Error happened while fetching partner table data.");
  }
};

const deletePartner = async (req, res) => {
  const values = req.params;

  try {
    await deletePartnerCommand(values.id);

    res.status(204).json({ message: "Partner succesffully deleted." });
  } catch (err) {
    console.log(err);
    res.status(400).json("Error happened while fetching partner table data.");
  }
};

module.exports = { getPartnerData, deletePartner };
