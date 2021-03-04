const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    registrationNumber: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    addressInformation: {
      city: Joi.string().required(),
      address: Joi.string().required(),
    },
    contactInformation: {
      phoneNumber: Joi.string().required(),
      email: Joi.string().required(),
    },
  }),
};

module.exports = {
  create,
};
