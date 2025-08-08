const Joi = require("joi");

const checkDataForCreateProposal = Joi.object({
  demand: Joi.string().required().messages({
    "any.required": "Demand amount is required",
    "string.base": "Demand amount must be a string",
  }),
  agreed: Joi.string().required().messages({
    "any.required": "Agreed amount is required",
    "string.base": "Agreed amount must be a string",
  }),
  partner_id: Joi.number().required().messages({
    "any.required": "Partner is required",
    "number.base": "Partner ID must be a number",
  }),
  status_id: Joi.number().required().messages({
    "any.required": "Status is required",
    "number.base": "Status ID must be a number",
  }),
  partner: Joi.string().optional(),
  status: Joi.string().optional(),
});

module.exports = { checkDataForCreateProposal };
