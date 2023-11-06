import Joi from '@hapi/joi';

export const newAudioValidator = (req, res, next) => {
  const schema = Joi.object({
    artiste: Joi.string().min(4).required(),
    imageUrl: Joi.string().required(),
    audioUrl: Joi.string().required()
  });
  console.log(req.body);
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
