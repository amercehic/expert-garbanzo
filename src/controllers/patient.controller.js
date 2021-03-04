const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { patientService } = require('../services');

const createPatient = catchAsync(async (req, res) => {
  const patient = await patientService.createPatient(req.body);
  res.status(httpStatus.CREATED).send(patient);
});

module.exports = {
  createPatient,
};
