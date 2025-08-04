const express = require("express");
const router = express.Router();

const {
  getTableData,
  deleteProposal,
} = require("../service/main-table.service");

router.get("/", getTableData);
router.delete("/:id", deleteProposal);

module.exports = router;
