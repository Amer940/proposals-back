const {
  createLabelValueFormatCountry,
} = require("../helper/create-label-value-country.helper");
const {
  getAllCountriesQuery,
} = require("../repository/query/get-all-countries.query");

const getCountryData = async (req, res) => {
  try {
    const data = await getAllCountriesQuery();

    if (!data || data.length === 0) {
      res.status(404).json({ message: "There is no data to be found." });
    }

    const handledDataForSelect = createLabelValueFormatCountry(data);

    res.status(200).json(handledDataForSelect);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Error occurred while getting countries." });
  }
};

module.exports = { getCountryData };
