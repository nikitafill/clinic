// patientRouter.js

const { Router } = require('express');
const router = new Router();
const patientController = require('../controllers/patientController');

router.post("/create", patientController.createPatient);
router.get("/", patientController.getPatientList);
router.get("/:Id", patientController.getPatientById);
router.delete("/:Id", patientController.deletePatientById);
router.patch("/:Id", patientController.updatePatientById);

module.exports = router;
