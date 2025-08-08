require("dotenv").config();
const { sequelize } = require("./db");
const { db } = require("./db");

const express = require("express");

const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");
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

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const countries = await db.createCountries();
    if (countries) {
      console.log("Countries created successfully.");
    }

    await sequelize.sync();
    console.log("All models were synchronized successfully.");

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
