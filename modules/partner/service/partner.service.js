const {
  generateWhereForPartner,
  generateWhereForCountry,
} = require("../factory/generateWhereForPartnerFromQuery");
const {
  createLabelValueFormatPartners,
} = require("../helper/create-label-value-format-partners.helper");
const {
  createPartnerCommand,
} = require("../repository/command/create-partner.command");
const {
  deletePartnerCommand,
} = require("../repository/command/delete-partner.command");
const {
  updatePartnerCommand,
} = require("../repository/command/update-partner.command");
const {
  getAllPartnersQuery,
} = require("../repository/query/find-all-partners.query");
const {
  findPaginatedFilteredPartnerTableContentQuery,
} = require("../repository/query/find-partner-table-content.query");
const {
  findPartnerWithNameOrEmailQuery,
} = require("../repository/query/find-partner-with-name-or-email.query");
const {
  checkDataForCreatePartner,
} = require("../validation/check-for-create-partner-schema.api");
const {
  checkDataForUpdatePartner,
} = require("../validation/check-for-update-partner-schema.api");

const getPartnerData = async (req, res) => {
  const value = req.query;

  try {
    const wherePartner = generateWhereForPartner(value);
    const whereCountry = generateWhereForCountry(value);

    const data = await findPaginatedFilteredPartnerTableContentQuery(
      value.page,
      value.pageSize,
      wherePartner,
      whereCountry
    );

    if (!data || data.length === 0) {
      res.status(404).json({ message: "No data found in the table" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(400).json({ message: err.message });
  }
};

const createPartner = async (req, res) => {
  try {
    const { value, error } = checkDataForCreatePartner.validate(req.body);

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const isntUniquePartner = await findPartnerWithNameOrEmailQuery(value);

    if (isntUniquePartner) {
      res
        .status(400)
        .json({ message: "Partner with that name or email already exists!" });
      return;
    }

    const partner = await createPartnerCommand(value);

    if (!partner) {
      res.status(400).json({ message: "Partner was not created." });
      return;
    }

    res.status(201).json({ message: "Partner successfully created!" });
  } catch (err) {
    console.log(err);
    res.status(400).json("Error happened while creating partner.");
  }
};

const editPartner = async (req, res) => {
  try {
    const { value, error } = checkDataForUpdatePartner.validate(req.body, {
      convert: true,
    });

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const partner = await updatePartnerCommand(value);

    if (partner === 0) {
      res.status(400).json({ message: "Failed to update partner." });
      return;
    }

    res.status(200).json({ message: "Partner updated successfully!" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const deletePartner = async (req, res) => {
  const value = req.params;

  try {
    await deletePartnerCommand(value.id);

    res.status(204).json({ message: "Partner succesffully deleted." });
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(400).json({ message: err.message });
  }
};

const getPartnerDataForSelect = async (req, res) => {
  try {
    const partners = await getAllPartnersQuery();

    if (!partners || partners.length === 0) {
      res.status(404).json({ message: "There are no partners" });
      return;
    }

    const handledDataForSelect = createLabelValueFormatPartners(partners);

    res.status(200).json(handledDataForSelect);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      mesage: err.message,
    });
  }
};

module.exports = {
  getPartnerData,
  createPartner,
  editPartner,
  deletePartner,
  getPartnerDataForSelect,
};
