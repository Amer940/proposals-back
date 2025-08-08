require("dotenv").config();
const { sequelize } = require("./db");
const { db } = require("./db");
const cron = require("node-cron");

const express = require("express");

const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");
const { setOldProposalsToIgnored } = require("./ignoredCron");
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.DOMAIN,
    credentials: true,
  })
);
app.use(express.json());

app.use(
  "/api/proposals",
  require("./modules/proposals/routes/proposals.route")
);
app.use("/api/partner", require("./modules/partner/routes/partner.route"));
app.use("/api/country", require("./modules/country/routes/country.route"));
app.use("/api/statuses", require("./modules/statuses/routes/statuses.route"));
app.use(
  "/api/analytics",
  require("./modules/analytics/routes/analytics.route")
);

cron.schedule("* 13 * * *", setOldProposalsToIgnored);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync();
    console.log("All models were synchronized successfully.");

    const countries = await db.createCountries();
    if (countries) {
      console.log("Countries created successfully.");
    }

    const statuses = await db.createStatuses();
    if (statuses) {
      console.log("Statuses created successfully.");
    }

    const triggers = await db.createTriggers();
    if (triggers) {
      console.log("Triggers created successfully.");
    }

    app.listen(PORT, () => {
      console.log(
        "Server is Successfully Running, and App is listening on port " + PORT
      );
    });
  } catch (error) {
    console.error("An error occurred starting the backend:", error);
  }
}

startServer();
