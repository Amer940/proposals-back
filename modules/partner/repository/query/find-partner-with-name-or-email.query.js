const { db } = require("../../../../db");
const Op = db.Op;
const Partners = db.partners;

const findPartnerWithNameOrEmailQuery = async (values) => {
  return Partners.findOne({
    where: {
      [Op.or]: [{ name: values.name }, { email: values.email }],
    },
  });
};

module.exports = { findPartnerWithNameOrEmailQuery };
