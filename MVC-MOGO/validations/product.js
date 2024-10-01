// import Joi from "joi";

const createValidator = Joi.object({
  title: Joi.string().required().email(),
  description: Joi.string(),
  brand: Joi.string(),
  price: Joi.number(),
  image: Joi.string(),
});

export { createValidator };
