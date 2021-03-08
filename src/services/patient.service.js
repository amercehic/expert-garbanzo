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

/**
 *
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPatients = async (filter, options) => {
  const patients = await Patient.paginate(filter, options);
  return patients;
};

/**
 * Get patient by id
 * @param {ObjectId} id
 * @returns {Promise<Patient>}
 */
const getPatientById = async (id) => {
  return Patient.findById(id);
};

// /**
//  * Get patient by user id
//  * @param {string} email
//  * @returns {Promise<User>}
//  */
// const getUserByEmail = async (email) => {
//   return User.findOne({ email });
// };

/**
 * Update patient by id
 * @param {ObjectId} patientId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updatePatientById = async (patientId, updateBody) => {
  const patient = await getPatientById(patientId);
  if (!patient) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Patient not found');
  }
  if (updateBody.registrationNumber && (await Patient.doesRegistrationNumberExist(updateBody.registrationNumber))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Registration number already taken');
  }
  Object.assign(patient, updateBody);
  await patient.save();
  return patient;
};

/**
 * Delete patient by id
 * @param {ObjectId} patientId
 * @returns {Promise<User>}
 */
const deletePatientById = async (patientId) => {
  const patient = await getPatientById(patientId);
  if (!patient) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Patient not found');
  }
  await patient.remove();
  return patient;
};

module.exports = {
  createPatient,
  queryPatients,
  getPatientById,
  updatePatientById,
  deletePatientById,
};
