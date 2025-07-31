const express = require("express");
const router = express.Router();

const { getTableData } = require("../service/main-table.service");

router.get("/", getTableData);

module.exports = router;
