// import { Joi } from "joi";

const registerValidator = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
});

const loginValidator = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});
export { registerValidator, loginValidator };
