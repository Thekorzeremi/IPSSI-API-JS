const Joi = require("joi");

const createProductSchema = Joi.object({
  name: Joi.string().trim().min(1).required(),
  price: Joi.number().min(0).required(),
  stock: Joi.number().integer().min(0).optional(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().trim().min(1).optional(),
  price: Joi.number().min(0).optional(),
  stock: Joi.number().integer().min(0).optional(),
})
  .min(1)
  .unknown(false);

module.exports = {
  createProductSchema,
  updateProductSchema,
};
