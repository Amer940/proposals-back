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
db.countries = require("./models/countries")(sequelize, Sequelize);
db.statuses = require("./models/statuses")(sequelize, Sequelize);
db.Op = Sequelize.Op;

Object.keys(db).forEach((modelName) => {
  if (db[modelName]?.associate) {
    db[modelName].associate(db);
  }
});

module.exports = { sequelize, db };
