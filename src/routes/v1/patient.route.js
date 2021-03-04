const express = require('express');
const validate = require('../../middlewares/validate');
const patientController = require('../../controllers/patient.controller');
const patientValidation = require('../../validations/patient.validation');

const router = express.Router();

router.post('/create', validate(patientValidation.create), patientController.createPatient);

module.exports = router;
