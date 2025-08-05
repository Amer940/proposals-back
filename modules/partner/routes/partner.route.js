const express = require("express");
const router = express.Router();

const {
  getPartnerData,
  createPartner,
  deletePartner,
} = require("../service/partner.service");

router.get("/", getPartnerData);
router.post("/", createPartner);
router.delete("/:id", deletePartner);

module.exports = router;
