const Joi = require("joi");

const validateRegistration = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    team: Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      logo: Joi.string().required(),
    }).required(),
  });

  return schema.validate(user);
};

module.exports = validateRegistration;
