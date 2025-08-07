const createLabelValueFormatPartners = (partners) => {
  return partners.map((partner) => ({
    label: partner.name,
    value: partner.id,
  }));
};

module.exports = { createLabelValueFormatPartners };
