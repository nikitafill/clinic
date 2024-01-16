// medicalResultRouter.js

const { Router } = require('express');
const router = new Router();
const medicalResultController = require('../controllers/medicalResultController');

router.post("/create", medicalResultController.createMedicalResult);
router.get("/", medicalResultController.getMedicalResultList);
router.get("/:Id", medicalResultController.getMedicalResultById);
router.patch("/:Id", medicalResultController.updateMedicalResultById);

router.get("/doctor/:doctorId", medicalResultController.getMedicalResultsByDoctorId);
router.post("/patient", medicalResultController.getMedicalResultsByPatientInfo);

module.exports = router;
