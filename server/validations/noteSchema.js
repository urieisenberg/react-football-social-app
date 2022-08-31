const Joi = require("joi");

const validateNote = (note) => {
  const schema = Joi.object({
    text: Joi.string().required(),
  });

  return schema.validate(note);
};

module.exports = validateNote;
