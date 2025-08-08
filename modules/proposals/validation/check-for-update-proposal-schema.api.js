const Joi = require("joi");

const checkDataForUpdateProposal = Joi.object({
  id: Joi.number().required().positive().integer().messages({
    "any.required": "Status is required",
    "number.base": "Status ID must be a number",
    "number.integer": "ID must be an integer",
    "number.positive": "ID must be a positive number",
  }),
  demand: Joi.number().required().messages({
    "any.required": "Demand amount is required",
    "number.base": "Demand amount must be a number",
  }),
  agreed: Joi.number().required().messages({
    "any.required": "Agreed amount is required",
    "number.base": "Agreed amount must be a number",
  }),
  paid: Joi.number().required().messages({
    "any.required": "Paid amount is required",
    "number.base": "Paid amount must be a number",
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

module.exports = { checkDataForUpdateProposal };
