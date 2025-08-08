const createLabelValueFormatStatuses = (statuses) => {
  return statuses.map((status) => ({
    label: status.name,
    value: status.id,
  }));
};

module.exports = { createLabelValueFormatStatuses };
