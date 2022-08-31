const Joi = require("joi");

const validateComment = (comment) => {
  const schema = Joi.object({
    content: Joi.string().min(1).max(50).required(),
    image: Joi.string(),
    username: Joi.string(),
  });
  return schema.validate(comment);
};

module.exports = validateComment;
