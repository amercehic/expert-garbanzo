const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const patientController = require('../../controllers/patient.controller');
const patientValidation = require('../../validations/patient.validation');

const router = express.Router();

router.route('/').post(auth('/'), validate(patientValidation.create), patientController.createPatient);

module.exports = router;
