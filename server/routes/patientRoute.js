const express = require("express");
const router = express.Router();
const Patient = require("../models/patientModel")


router.route('/create').post((req, res) => {
    const patient = req.body;
    const newPatient = new Patient({ ...patient })
    newPatient.save()
})
module.exports = router;