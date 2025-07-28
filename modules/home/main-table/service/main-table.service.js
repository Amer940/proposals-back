const { db } = require("../../../../db");
const MainTable = db.main_proposals;

const getTableDate = async (req, res) => {
  console.log("I got this: ", MainTable);
  try {
    const data = await MainTable.findAll();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json("Err happened");
  }
};

module.exports = {
  getTableDate,
};
