// patientRouter.js

const { Router } = require('express');
const router = new Router();
const patientController = require('../controllers/patientController');

/*router.post("/", patientController.createPatient);
router.get("/", patientController.getPatientList);
router.get("/:id", patientController.getPatientById);
router.delete("/:id", patientController.deletePatientById);
router.patch("/:id", patientController.updatePatientById);*/

module.exports = router;
