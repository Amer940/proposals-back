const express = require("express");
const router = express.Router();

const {
  getPartnerData,
  createPartner,
  deletePartner,
  getPartnerDataForSelect,
  editPartner,
} = require("../service/partner.service");

router.get("/", getPartnerData);
router.get("/all", getPartnerDataForSelect);
router.post("/", createPartner);
router.put("/", editPartner);
router.delete("/:id", deletePartner);

module.exports = router;
