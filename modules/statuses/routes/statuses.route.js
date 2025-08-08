const express = require("express");
const router = express.Router();

const { getStatuses } = require("../service/statuses.service");

router.get("/", getStatuses);

module.exports = router;
