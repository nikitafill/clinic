// patientRouter.js

const { Router } = require('express');
const router = new Router();
const patientController = require('../controllers/patientController');

router.post("/patient/create", patientController.createPatient);
router.get("/patient", patientController.getPatientList);
router.get("/patient/:Id", patientController.getPatientById);
router.delete("/patient/:Id", patientController.deletePatientById);
router.patch("/patient/:Id", patientController.updatePatientById);

module.exports = router;
