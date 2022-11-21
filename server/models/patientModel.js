const mongoose = require("mongoose");

const patientSchema = {
    firstName: String,
    lastName: String,
    phone: String,
    issue: String,
    date: String,
    time: String
}

const Patient = mongoose.model("Patient", patientSchema);


module.exports = Patient;