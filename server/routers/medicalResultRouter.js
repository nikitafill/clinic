// medicalResultRouter.js

const { Router } = require('express');
const router = new Router();
const medicalResultController = require('../controllers/medicalResultController');

router.post("/medicalResult/create", medicalResultController.createMedicalResult);
router.get("/medicalResult", medicalResultController.getMedicalResultList);
router.get("/medicalResult/:Id", medicalResultController.getMedicalResultById);
router.patch("/medicalResult/:Id", medicalResultController.updateMedicalResultById);

module.exports = router;
