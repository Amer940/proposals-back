const { db } = require("../../../../db");
const Partners = db.partners;

const updatePartnerCommand = async (value) => {
  return Partners.update(
    {
      name: value.name,
      email: value.email,
      country_id: value.country_id,
      city: value.city,
      description: value.description,
    },
    {
      where: { id: value.id },
    }
  );
};

module.exports = { updatePartnerCommand };
