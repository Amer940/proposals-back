const { db } = require("../../../../db");
const Country = db.countries;

const getAllCountriesQuery = async () => {
  return await Country.findAll({
    attributes: ["id", "name", "short_name"],
  });
};

module.exports = { getAllCountriesQuery };
