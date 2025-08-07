const express = require("express");
const router = express.Router();

const {
  getMonthlyMoney,
  getYearlyMoney,
  getSentProposals,
} = require("../service/analytics.service");

router.get("/money-monthly", getMonthlyMoney);
router.get("/money-yearly", getYearlyMoney);
router.get("/sent", getSentProposals);

module.exports = router;
