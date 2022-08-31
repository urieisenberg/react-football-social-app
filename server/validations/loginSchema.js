const Joi = require("joi");

const validateLogin = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(user);
};

module.exports = validateLogin;
