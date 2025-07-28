const express = require("express");
const router = express.Router();

const { getTableDate } = require("../service/main-table.service");

router.get("/", getTableDate);

module.exports = router;
