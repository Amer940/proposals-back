const {
  getMonthlyMoneyAnalyticsQuery,
} = require("../repository/query/find-all-monthly-data.query");
const {
  getMonthlyPartnerAnalyticsQuery,
} = require("../repository/query/find-all-monthly-partner-data.query");
const {
  getProposalsAnalyticsQuery,
} = require("../repository/query/find-all-proposals-data.query");
const {
  getYearlyMoneyAnalyticsQuery,
} = require("../repository/query/find-all-yearly-data.query");
const {
  getYearlyPartnerAnalyticsQuery,
} = require("../repository/query/find-all-yearly-partner-data.query");

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

const getAnalyticsProposals = async (req, res) => {
  try {
    const proposals = await getProposalsAnalyticsQuery();

    if (!proposals) {
      res.status(404).json({ message: "Didn't find any data for analytics." });
      return;
    }

    res.status(200).json(proposals);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getMonthlyPartner = async (req, res) => {
  try {
    const partner = await getMonthlyPartnerAnalyticsQuery();

    if (!partner) {
      res.status(404).json({ message: "Didn't find any data for analytics." });
      return;
    }

    res.status(200).json(partner);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getYearlyPartner = async (req, res) => {
  try {
    const partner = await getYearlyPartnerAnalyticsQuery();

    if (!partner) {
      res.status(404).json({ message: "Didn't find any data for analytics." });
      return;
    }

    res.status(200).json(partner);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getYearlyMoney,
  getMonthlyMoney,
  getAnalyticsProposals,
  getMonthlyPartner,
  getYearlyPartner,
};
