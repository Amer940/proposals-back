const Joi = require("joi");

const checkDataForCreatePartner = Joi.object({
  name: Joi.string().min(2).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Partner name is required",
    "string.min": "Name must be at least 2 characters",
    "any.required": "Partner name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Invalid email address",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  country_id: Joi.number().required().messages({
    "number.base": "Country must be a number",
    "any.required": "Country is required",
  }),
  country: Joi.string().optional(),
  city: Joi.string().min(2).required().messages({
    "string.base": "City must be a string",
    "string.empty": "City is required",
    "string.min": "City must be at least 2 characters",
    "any.required": "City is required",
  }),
  description: Joi.string().optional().allow("", null),
});

module.exports = { checkDataForCreatePartner };
