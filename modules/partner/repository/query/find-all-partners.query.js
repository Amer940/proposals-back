const { db } = require("../../../../db");
const Partners = db.partners;

const getAllPartnersQuery = async () => {
  return Partners.findAll({
    attributes: ["id", "name"],
  });
};

module.exports = { getAllPartnersQuery };
