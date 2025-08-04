const { db } = require("../../../../db");
const Op = db.Op;

const generateWhereForSelectGet = (status) => {
  let where = {};

  if (status && status != "all") {
    where.status_id = status;
  }

  return where;
};

const generateWhereForEmailGet = (email) => {
  let where = {};

  if (email) {
    where.email = { [Op.like]: `%${email}%` };
  }

  return where;
};

module.exports = { generateWhereForSelectGet, generateWhereForEmailGet };
