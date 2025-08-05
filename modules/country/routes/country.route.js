const express = require("express");
const router = express.Router();

const { getCountryData } = require("../service/country.service");

router.get("/", getCountryData);

module.exports = router;
