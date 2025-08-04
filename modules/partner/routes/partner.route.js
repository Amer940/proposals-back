const express = require("express");
const router = express.Router();

const { getPartnerData, deletePartner } = require("../service/partner.service");

router.get("/", getPartnerData);
router.delete("/:id", deletePartner);

module.exports = router;
