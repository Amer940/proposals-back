const { db } = require("../../../../db");
const Partners = db.partners;

const createPartnerCommand = async (values) => {
  return Partners.create({
    name: values.name,
    email: values.email,
    country_id: values.country_id,
    city: values.city,
    description: values.description,
  });
};

module.exports = { createPartnerCommand };
