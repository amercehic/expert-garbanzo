const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const patientController = require('../../controllers/patient.controller');
const patientValidation = require('../../validations/patient.validation');

const router = express.Router();

router
  .route('/')
  .post(auth('managePatients'), validate(patientValidation.create), patientController.createPatient)
  .get(auth('getPatients'), validate(patientValidation.getPatients), patientController.getPatients);

router
  .route('/:patientId')
  .get(auth('getPatients'), validate(patientValidation.getPatient), patientController.getPatient)
  .patch(auth('managePatients'), validate(patientValidation.updatePatient), patientController.updatePatient)
  .delete(auth('managePatients'), validate(patientValidation.deletePatient), patientController.deletePatient);

module.exports = router;
