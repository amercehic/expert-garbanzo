const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const patientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    registrationNumber: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    addressInformation: {
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    contactInformation: {
      phoneNumber: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
patientSchema.plugin(toJSON);
patientSchema.plugin(paginate);

/**
 *
 * @param {string} registrationNumber
 */
patientSchema.statics.doesRegistrationNumberExist = async function (registrationNumber) {
  const patient = await this.findOne({ registrationNumber });
  return !!patient;
};

/**
 * @typedef Patient
 */
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
