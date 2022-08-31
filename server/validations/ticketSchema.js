const Joi = require("joi");

const validateTicket = (ticket) => {
  const schema = Joi.object({
    subject: Joi.string()
      .required()
      .valid("Bug", "General Question", "Feature Request", "Other"),
    description: Joi.string().required().min(5).max(500),
  });

  return schema.validate(ticket);
};

module.exports = validateTicket;
