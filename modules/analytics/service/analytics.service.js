const {
  getMonthlyMoneyAnalyticsQuery,
} = require("../repository/query/find-all-monthly-data.query");
const {
  getSentAnalyticsQuery,
} = require("../repository/query/find-all-sent-data.query");
const {
  getYearlyMoneyAnalyticsQuery,
} = require("../repository/query/find-all-yearly-data.query");

const getYearlyMoney = async (req, res) => {
  try {
    const yearly = await getYearlyMoneyAnalyticsQuery();

    if (!yearly) {
      res.status(404).json({ message: "Didn't find any data for analytics." });
      return;
    }

    res.status(200).json(yearly);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getMonthlyMoney = async (req, res) => {
  try {
    const monthly = await getMonthlyMoneyAnalyticsQuery();

    if (!monthly) {
      res.status(404).json({ message: "Didn't find any data for analytics." });
      return;
    }

    res.status(200).json(monthly);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getSentProposals = async (req, res) => {
  try {
    const sent = await getSentAnalyticsQuery();

    if (!sent) {
      res.status(404).json({ message: "Didn't find any data for analytics." });
      return;
    }

    res.status(200).json(sent);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getYearlyMoney, getMonthlyMoney, getSentProposals };
