const httpStatus = require('http-status');
const Patient = require('../models/patient.model');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} patientBody
 * @returns {Promise<Patient>}
 */
const createPatient = async (patientBody) => {
  if (await Patient.doesRegistrationNumberExist(patientBody.registrationNumber)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Patient with this registration number already exists');
  }
  const patient = await Patient.create(patientBody);
  return patient;
};

module.exports = {
  createPatient,
};
