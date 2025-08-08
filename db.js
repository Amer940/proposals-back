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
db.paid_movements = require("./models/paid_movement")(sequelize, Sequelize);
db.status_movement = require("./models/status_movement")(sequelize, Sequelize);
db.fn = Sequelize.fn;
db.col = Sequelize.col;
db.literal = Sequelize.literal;
db.Op = Sequelize.Op;

db.createStatuses = async () => {
  try {
    const count = await db.statuses.count();
    if (count > 0) {
      console.log("Countries already exist. Skipping creation.");
      return false;
    }

    await db.statuses.bulkCreate([
      { id: 1, name: "Success" },
      { id: 2, name: "Denied" },
      { id: 3, name: "Sent" },
      { id: 4, name: "Ignored" },
    ]);

    return true;
  } catch (err) {
    console.log("Failed to create statuses:", err);
    throw err;
  }
};

db.createCountries = async () => {
  try {
    const count = await db.countries.count();
    if (count > 0) {
      console.log("Countries already exist. Skipping creation.");
      return false;
    }
    await db.countries.bulkCreate([
      { short_name: "AF", name: "Afghanistan" },
      { short_name: "AL", name: "Albania" },
      { short_name: "DZ", name: "Algeria" },
      { short_name: "VI", name: "American Virgin Islands" },
      { short_name: "AS", name: "American Samoa" },
      { short_name: "UM", name: "United States Minor Outlying Islands" },
      { short_name: "AD", name: "Andorra" },
      { short_name: "AO", name: "Angola" },
      { short_name: "AI", name: "Anguilla" },
      { short_name: "AQ", name: "Antarctica" },
      { short_name: "AG", name: "Antigua and Barbuda" },
      { short_name: "AR", name: "Argentina" },
      { short_name: "AM", name: "Armenia" },
      { short_name: "AW", name: "Aruba" },
      { short_name: "AU", name: "Australia" },
      { short_name: "AT", name: "Austria" },
      { short_name: "AZ", name: "Azerbaijan" },
      { short_name: "BS", name: "Bahamas" },
      { short_name: "BH", name: "Bahrain" },
      { short_name: "BD", name: "Bangladesh" },
      { short_name: "BB", name: "Barbados" },
      { short_name: "BE", name: "Belgium" },
      { short_name: "BZ", name: "Belize" },
      { short_name: "BJ", name: "Benin" },
      { short_name: "BM", name: "Bermuda" },
      { short_name: "BY", name: "Belarus" },
      { short_name: "BW", name: "Botswana" },
      { short_name: "BO", name: "Bolivia" },
      { short_name: "BA", name: "Bosna i Hercegovina" },
      { short_name: "CX", name: "Christmas Island" },
      { short_name: "BR", name: "Brazil" },
      { short_name: "VG", name: "British Virgin Islands" },
      { short_name: "IO", name: "British Indian Ocean Territory" },
      { short_name: "BN", name: "Brunei" },
      { short_name: "BG", name: "Bulgaria" },
      { short_name: "BF", name: "Burkina Faso" },
      { short_name: "BI", name: "Burundi" },
      { short_name: "BT", name: "Bhutan" },
      { short_name: "CF", name: "Central African Republic" },
      { short_name: "ME", name: "Crna Gora" },
      { short_name: "TD", name: "Chad" },
      { short_name: "CZ", name: "Czech Republic" },
      { short_name: "CL", name: "Chile" },
      { short_name: "DK", name: "Denmark" },
      { short_name: "CD", name: "Democratic Republic of the Congo" },
      { short_name: "DM", name: "Dominica" },
      { short_name: "DO", name: "Dominican Republic" },
      { short_name: "DJ", name: "Djibouti" },
      { short_name: "EG", name: "Egypt" },
      { short_name: "EC", name: "Ecuador" },
      { short_name: "GQ", name: "Equatorial Guinea" },
      { short_name: "ER", name: "Eritrea" },
      { short_name: "EE", name: "Estonia" },
      { short_name: "SZ", name: "Eswatini" },
      { short_name: "ET", name: "Ethiopia" },
      { short_name: "FO", name: "Faroe Islands" },
      { short_name: "FJ", name: "Fiji" },
      { short_name: "PH", name: "Philippines" },
      { short_name: "FI", name: "Finland" },
      { short_name: "FK", name: "Falkland Islands" },
      { short_name: "FR", name: "France" },
      { short_name: "GF", name: "French Guiana" },
      { short_name: "PF", name: "French Polynesia" },
      { short_name: "TF", name: "French Southern and Antarctic Lands" },
      { short_name: "GA", name: "Gabon" },
      { short_name: "GM", name: "Gambia" },
      { short_name: "GH", name: "Ghana" },
      { short_name: "GG", name: "Guernsey" },
      { short_name: "GI", name: "Gibraltar" },
      { short_name: "GR", name: "Greece" },
      { short_name: "GD", name: "Grenada" },
      { short_name: "GL", name: "Greenland" },
      { short_name: "GE", name: "Georgia" },
      { short_name: "GU", name: "Guam" },
      { short_name: "GP", name: "Guadeloupe" },
      { short_name: "GY", name: "Guyana" },
      { short_name: "GT", name: "Guatemala" },
      { short_name: "GN", name: "Guinea" },
      { short_name: "GW", name: "Guinea-Bissau" },
      { short_name: "HT", name: "Haiti" },
      { short_name: "NL", name: "Netherlands" },
      { short_name: "HN", name: "Honduras" },
      { short_name: "HK", name: "Hong Kong" },
      { short_name: "HR", name: "Hrvatska" },
      { short_name: "IN", name: "India" },
      { short_name: "ID", name: "Indonesia" },
      { short_name: "IQ", name: "Iraq" },
      { short_name: "IR", name: "Iran" },
      { short_name: "IE", name: "Ireland" },
      { short_name: "IS", name: "Iceland" },
      { short_name: "TL", name: "East Timor" },
      { short_name: "IT", name: "Italy" },
      { short_name: "IL", name: "Israel" },
      { short_name: "JM", name: "Jamaica" },
      { short_name: "JP", name: "Japan" },
      { short_name: "YE", name: "Yemen" },
      { short_name: "JE", name: "Jersey" },
      { short_name: "JO", name: "Jordan" },
      { short_name: "KR", name: "South Korea" },
      { short_name: "SS", name: "South Sudan" },
      { short_name: "ZA", name: "South Africa" },
      { short_name: "KY", name: "Cayman Islands" },
      { short_name: "KH", name: "Cambodia" },
      { short_name: "CM", name: "Cameroon" },
      { short_name: "CA", name: "Canada" },
      { short_name: "CV", name: "Cape Verde" },
      { short_name: "BQ", name: "Caribbean Netherlands" },
      { short_name: "QA", name: "Qatar" },
      { short_name: "KZ", name: "Kazakhstan" },
      { short_name: "KE", name: "Kenya" },
      { short_name: "CN", name: "China" },
      { short_name: "CY", name: "Cyprus" },
      { short_name: "KG", name: "Kyrgyzstan" },
      { short_name: "KI", name: "Kiribati" },
      { short_name: "CC", name: "Cocos (Keeling) Islands" },
      { short_name: "CO", name: "Colombia" },
      { short_name: "KM", name: "Comoros" },
      { short_name: "CG", name: "Congo" },
      { short_name: "CR", name: "Costa Rica" },
      { short_name: "CU", name: "Cuba" },
      { short_name: "CK", name: "Cook Islands" },
      { short_name: "CW", name: "Curaçao" },
      { short_name: "KW", name: "Kuwait" },
      { short_name: "LA", name: "Laos" },
      { short_name: "LV", name: "Latvia" },
      { short_name: "LS", name: "Lesotho" },
      { short_name: "LB", name: "Lebanon" },
      { short_name: "LR", name: "Liberia" },
      { short_name: "LY", name: "Libya" },
      { short_name: "LI", name: "Liechtenstein" },
      { short_name: "LT", name: "Lithuania" },
      { short_name: "LU", name: "Luxembourg" },
      { short_name: "MG", name: "Madagascar" },
      { short_name: "HU", name: "Hungary" },
      { short_name: "YT", name: "Mayotte" },
      { short_name: "MO", name: "Macao (China SAR)" },
      { short_name: "MW", name: "Malawi" },
      { short_name: "MV", name: "Maldives" },
      { short_name: "MY", name: "Malaysia" },
      { short_name: "ML", name: "Mali" },
      { short_name: "MT", name: "Malta" },
      { short_name: "MA", name: "Morocco" },
      { short_name: "MH", name: "Marshall Islands" },
      { short_name: "MQ", name: "Martinique" },
      { short_name: "MU", name: "Mauritius" },
      { short_name: "MR", name: "Mauritania" },
      { short_name: "MX", name: "Mexico" },
      { short_name: "FM", name: "Micronesia" },
      { short_name: "MM", name: "Myanmar" },
      { short_name: "MD", name: "Moldova" },
      { short_name: "MC", name: "Monaco" },
      { short_name: "MN", name: "Mongolia" },
      { short_name: "MS", name: "Montserrat" },
      { short_name: "MZ", name: "Mozambique" },
      { short_name: "NA", name: "Namibia" },
      { short_name: "NR", name: "Nauru" },
      { short_name: "NP", name: "Nepal" },
      { short_name: "NE", name: "Niger" },
      { short_name: "NG", name: "Nigeria" },
      { short_name: "NI", name: "Nicaragua" },
      { short_name: "NU", name: "Niue" },
      { short_name: "NO", name: "Norway" },
      { short_name: "NC", name: "New Caledonia" },
      { short_name: "NZ", name: "New Zealand" },
      { short_name: "DE", name: "Germany" },
      { short_name: "CI", name: "Ivory Coast" },
      { short_name: "AX", name: "Åland Islands" },
      { short_name: "OM", name: "Oman" },
      { short_name: "TC", name: "Turks and Caicos Islands" },
      { short_name: "WF", name: "Wallis and Futuna Islands" },
      { short_name: "BV", name: "Bouvet Island" },
      { short_name: "IM", name: "Isle of Man" },
      { short_name: "NF", name: "Norfolk Island" },
      { short_name: "PK", name: "Pakistan" },
      { short_name: "PW", name: "Palau" },
      { short_name: "PS", name: "Palestinian Territory" },
      { short_name: "PA", name: "Panama" },
      { short_name: "PG", name: "Papua New Guinea" },
      { short_name: "PY", name: "Paraguay" },
      { short_name: "PE", name: "Peru" },
      { short_name: "PN", name: "Pitcairn Islands" },
      { short_name: "PL", name: "Poland" },
      { short_name: "PR", name: "Puerto Rico" },
      { short_name: "PT", name: "Portugal" },
      { short_name: "RE", name: "Reunion" },
      { short_name: "RW", name: "Rwanda" },
      { short_name: "RO", name: "Romania" },
      { short_name: "RU", name: "Russia" },
      { short_name: "SV", name: "El Salvador" },
      { short_name: "WS", name: "Samoa" },
      { short_name: "SM", name: "San Marino" },
      { short_name: "ST", name: "Sao Tome and Principe" },
      { short_name: "SA", name: "Saudi Arabia" },
      { short_name: "SC", name: "Seychelles" },
      { short_name: "SN", name: "Senegal" },
      { short_name: "SL", name: "Sierra Leone" },
      { short_name: "SG", name: "Singapore" },
      { short_name: "SX", name: "Sint Maarten" },
      { short_name: "SY", name: "Syria" },
      { short_name: "US", name: "United States" },
      { short_name: "KP", name: "North Korea" },
      { short_name: "MK", name: "Sjeverna Makedonija" },
      { short_name: "MP", name: "Northern Mariana Islands" },
      { short_name: "SK", name: "Slovakia" },
      { short_name: "SI", name: "Slovenia" },
      { short_name: "SB", name: "Solomon Islands" },
      { short_name: "SO", name: "Somalia" },
      { short_name: "RS", name: "Srbija" },
      { short_name: "SD", name: "Sudan" },
      { short_name: "SR", name: "Suriname" },
      { short_name: "SJ", name: "Svalbard and Jan Mayen" },
      { short_name: "SH", name: "Saint Helena" },
      { short_name: "LC", name: "Saint Lucia" },
      { short_name: "BL", name: "Saint Barthélemy" },
      { short_name: "KN", name: "Saint Kitts and Nevis" },
      { short_name: "MF", name: "Saint Martin" },
      { short_name: "PM", name: "Saint Pierre and Miquelon" },
      { short_name: "VC", name: "Saint Vincent and the Grenadines" },
      { short_name: "ES", name: "Spain" },
      { short_name: "LK", name: "Sri Lanka" },
      { short_name: "SE", name: "Sweden" },
      { short_name: "CH", name: "Switzerland" },
      { short_name: "TJ", name: "Tajikistan" },
      { short_name: "TH", name: "Thailand" },
      { short_name: "TW", name: "Taiwan" },
      { short_name: "TZ", name: "Tanzania" },
      { short_name: "TG", name: "Togo" },
      { short_name: "TK", name: "Tokelau" },
      { short_name: "TO", name: "Tonga" },
      { short_name: "TT", name: "Trinidad and Tobago" },
      { short_name: "TN", name: "Tunisia" },
      { short_name: "TM", name: "Turkmenistan" },
      { short_name: "TR", name: "Turkey" },
      { short_name: "TV", name: "Tuvalu" },
      { short_name: "UG", name: "Uganda" },
      { short_name: "AE", name: "United Arab Emirates" },
      { short_name: "GB", name: "United Kingdom" },
      { short_name: "UA", name: "Ukraine" },
      { short_name: "UY", name: "Uruguay" },
      { short_name: "UZ", name: "Uzbekistan" },
      { short_name: "VU", name: "Vanuatu" },
      { short_name: "VA", name: "Vatican" },
      { short_name: "VE", name: "Venezuela" },
      { short_name: "VN", name: "Vietnam" },
      { short_name: "ZM", name: "Zambia" },
      { short_name: "EH", name: "Western Sahara" },
      { short_name: "ZW", name: "Zimbabwe" },
    ]);

    return true;
  } catch (err) {
    console.log("Failed to create countries:", err);
    throw err;
  }
};

db.createTriggers = async () => {
  try {
    await sequelize.query(
      `DROP TRIGGER IF EXISTS trg_after_main_proposals_insert;`
    );
    await sequelize.query(
      `DROP TRIGGER IF EXISTS trg_after_main_proposals_update;`
    );
    await sequelize.query(
      `DROP TRIGGER IF EXISTS trg_after_main_proposals_delete;`
    );

    await sequelize.query(`
      CREATE TRIGGER trg_after_main_proposals_insert
      AFTER INSERT ON main_proposals
      FOR EACH ROW
      BEGIN
        IF NEW.paid != 0 THEN
          INSERT INTO paid_movements (proposal_id, paid, createdAt, updatedAt)
          VALUES (NEW.id, NEW.paid, NOW(), NOW());
        END IF;
        INSERT INTO status_movements (proposal_id, status_id, createdAt, updatedAt)
        VALUES (NEW.id, 3, NOW(), NOW());
        IF NEW.status_id != 3 THEN
          INSERT INTO status_movements (proposal_id, status_id, createdAt, updatedAt)
          VALUES (NEW.id, NEW.status_id, NOW(), NOW());
        END IF;
      END;`);

    await sequelize.query(`
      CREATE TRIGGER trg_after_main_proposals_update
      AFTER UPDATE ON main_proposals
      FOR EACH ROW
      BEGIN
        DECLARE paidDiff FLOAT;
        SET paidDiff = NEW.paid - OLD.paid;
        IF paidDiff != 0 THEN
          INSERT INTO paid_movements (proposal_id, paid, createdAt, updatedAt)
          VALUES (NEW.id, paidDiff, NOW(), NOW());
        END IF;

        IF NEW.status_id != OLD.status_id AND NEW.status_id != 3 THEN
          IF NOT EXISTS (
            SELECT 1 FROM status_movements 
            WHERE proposal_id = NEW.id AND status_id = 3
          ) THEN
            INSERT INTO status_movements (proposal_id, status_id, createdAt, updatedAt)
            VALUES (NEW.id, 3, NOW(), NOW());
          END IF;

          IF EXISTS (
            SELECT 1 FROM status_movements 
            WHERE proposal_id = NEW.id AND status_id != 3
          ) THEN
            UPDATE status_movements
            SET status_id = NEW.status_id,
                updatedAt = NOW()
            WHERE proposal_id = NEW.id AND status_id != 3;
          ELSE
            INSERT INTO status_movements (proposal_id, status_id, createdAt, updatedAt)
            VALUES (NEW.id, NEW.status_id, NOW(), NOW());
          END IF;
        END IF;

        IF NEW.status_id = 3 THEN
          IF EXISTS (
            SELECT 1 FROM status_movements 
            WHERE proposal_id = NEW.id AND status_id != 3
          ) THEN
            DELETE FROM status_movements WHERE proposal_id = NEW.id AND status_id != 3;
          END IF;
        END IF;

      END;`);

    await sequelize.query(`
      CREATE TRIGGER trg_after_main_proposals_delete
      AFTER DELETE ON main_proposals
      FOR EACH ROW
      BEGIN
        DELETE FROM paid_movement WHERE proposal_id = OLD.id;
        DELETE FROM status_movements WHERE proposal_id = OLD.id;
      END;
    `);

    return true;
  } catch (err) {
    console.log("Failed to create triggers", err);
    return false;
  }
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName]?.associate) {
    db[modelName].associate(db);
  }
});

module.exports = { sequelize, db };
