// medicalResultRouter.js

const { Router } = require('express');
const router = new Router();
const medicalResultController = require('../controllers/medicalResultController');

/*router.post("/", medicalResultController.createMedicalResult);
router.get("/", medicalResultController.getMedicalResultList);
router.get("/:id", medicalResultController.getMedicalResultById);
router.patch("/:id", medicalResultController.updateMedicalResultById);*/

module.exports = router;
