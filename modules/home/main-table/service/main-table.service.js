const { db } = require("../../../../db");
const {
  findMainTableContentQuery,
} = require("../repository/query/find-main-table-content.query");

const getTableData = async (req, res) => {
  try {
    const data = await findMainTableContentQuery();

    if (!data || data.length === 0) {
      res.status(404).json({ message: "No data found in the table" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error happened while fetching main table data.");
  }
};

module.exports = {
  getTableData,
};
