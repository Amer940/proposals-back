const { db } = require("../../../db");
const Op = db.Op;

const generateWhereForPartner = (values) => {
  let where = {};

  if (values.name) {
    where.name = values.name;
  }

  if (values.email) {
    where.email = values.email;
  }

  if (values.city) {
    where.city = values.city;
  }

  return where;
};

const generateWhereForCountry = (values) => {
  let where = {};

  if (values.country) {
    where.name = { [Op.like]: `%${values.country}%` };
  }

  return where;
};

module.exports = { generateWhereForPartner, generateWhereForCountry };
