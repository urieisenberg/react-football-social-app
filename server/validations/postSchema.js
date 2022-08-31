const Joi = require("joi");

const validatePost = (post) => {
  const schema = Joi.object({
    type: Joi.string().required(),
    content: Joi.string().min(1).max(100).required(),
    image: Joi.string(),
    team: Joi.string(),
    comments: Joi.array(),
    username: Joi.string(),
    likes: Joi.array(),
  });
  return schema.validate(post);
};

module.exports = validatePost;
