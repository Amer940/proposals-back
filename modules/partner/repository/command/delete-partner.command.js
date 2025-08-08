const { db } = require("../../../../db");
const Partners = db.partners;

const deletePartnerCommand = async (id) => {
  return Partners.destroy({ where: { id } });
};

module.exports = { deletePartnerCommand };
