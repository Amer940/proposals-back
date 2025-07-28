const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect:
      "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  }
);

const db = {};
db.partners = require("./models/partners")(sequelize, Sequelize);
db.main_proposals = require("./models/main_proposals")(sequelize, Sequelize);

module.exports = { sequelize, db };
