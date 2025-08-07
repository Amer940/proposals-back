const {
  createLabelValueFormatStatuses,
} = require("../helper/create-label-value-format-statuses.helper");
const {
  getAllStatusesQuery,
} = require("../repository/query/find-all-statuses.query");

const getStatuses = async (req, res) => {
  try {
    const statuses = await getAllStatusesQuery();

    if (!statuses || statuses.length === 0) {
      res.status(404).json({ message: "There are no statuses." });
      return;
    }

    const handledDataForSelect = createLabelValueFormatStatuses(statuses);

    res.status(200).json(handledDataForSelect);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Error happened while fetching data for statuses" });
  }
};

module.exports = { getStatuses };
