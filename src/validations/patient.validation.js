const Joi = require('joi');
const { objectId } = require('./custom.validation');

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

const getPatients = {
  query: Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string(),
    registrationNumber: Joi.string(),
    dateOfBirth: Joi.date(),
    addressInformation: {
      city: Joi.string(),
      address: Joi.string(),
    },
    contactInformation: {
      phoneNumber: Joi.string(),
      email: Joi.string(),
    },
  }),
};

const getPatient = {
  params: Joi.object().keys({
    patientId: Joi.string().custom(objectId),
  }),
};

const updatePatient = {
  params: Joi.object().keys({
    patientId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      registrationNumber: Joi.string(),
      dateOfBirth: Joi.date(),
      addressInformation: {
        city: Joi.string(),
        address: Joi.string(),
      },
      contactInformation: {
        phoneNumber: Joi.string(),
        email: Joi.string(),
      },
    })
    .min(1),
};

const deletePatient = {
  params: Joi.object().keys({
    patientId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
};
