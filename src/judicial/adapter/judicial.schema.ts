import Joi from 'joi';

const paramId = Joi.object({
  id: Joi.number().required(),
});

export const schemas = {
  LIST_ONE: {
    params: paramId,
  },
  LIST_BY_PAGE: {
    params: Joi.object({
      page: Joi.number().min(0).required(),
    }),
  },
  INSERT: {
    body: Joi.object({
      description: Joi.string().required(),
      lead: Joi.number().required(),
    }),
  },
  UPDATE: {
    params: paramId,
    body: Joi.object({
      description: Joi.string().required(),
    }),
  },
  REMOVE: {
    params: paramId,
  },
};
