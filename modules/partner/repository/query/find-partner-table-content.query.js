const { db } = require("../../../../db");
const Partners = db.partners;
const Country = db.countries;

const findPaginatedFilteredPartnerTableContentQuery = async (
  page,
  pageSize,
  wherePartner,
  whereCountry
) => {
  return Partners.findAndCountAll({
    where: wherePartner,
    attributes: ["id", "name", "email", "city", "description"],
    include: [
      {
        model: Country,
        attributes: ["id", "name"],
        where: whereCountry,
      },
    ],
    order: [["createdAt", "DESC"]],
    limit: +pageSize,
    offset: +page * +pageSize,
  });
};

module.exports = { findPaginatedFilteredPartnerTableContentQuery };
