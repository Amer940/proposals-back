const express = require("express");
const router = express.Router();

const {
  getTableData,
  deleteProposal,
  createProposal,
  getInitialEditValues,
  editProposal,
} = require("../service/proposals.service");

router.get("/", getTableData);
router.get("/initial-edit/:id", getInitialEditValues);
router.post("/", createProposal);
router.put("/", editProposal);
router.delete("/:id", deleteProposal);

module.exports = router;
