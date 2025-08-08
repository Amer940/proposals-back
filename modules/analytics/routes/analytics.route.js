const express = require("express");
const router = express.Router();

const {
  getMonthlyMoney,
  getYearlyMoney,
  getAnalyticsProposals,
  getMonthlyPartner,
  getYearlyPartner,
} = require("../service/analytics.service");

router.get("/money-monthly", getMonthlyMoney);
router.get("/money-yearly", getYearlyMoney);
router.get("/partner-monthly", getMonthlyPartner);
router.get("/partner-yearly", getYearlyPartner);
router.get("/proposals", getAnalyticsProposals);

module.exports = router;
