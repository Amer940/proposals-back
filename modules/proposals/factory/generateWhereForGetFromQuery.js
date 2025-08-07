const { db } = require("../../../db");
const Op = db.Op;

const generateWhereForSelectGet = (status) => {
  let where = {};

  if (status && status != "all") {
    where.status_id = status;
  }

  return where;
};

const generateWhereForEmailGet = (name) => {
  let where = {};

  if (name) {
    where.name = { [Op.like]: `%${name}%` };
  }

  return where;
};

module.exports = { generateWhereForSelectGet, generateWhereForEmailGet };
