const createLabelValueFormatCountry = (countries) => {
  return countries.map((country) => ({
    label: country.name,
    value: country.id,
  }));
};

module.exports = { createLabelValueFormatCountry };
