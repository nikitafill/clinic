const Router = require('express');
const router = new Router();
const doctorController = require('../controllers/doctorController');

router.post("/doctor/create", doctorController.createDoctor);
router.get("/doctor", doctorController.getDoctorList);
router.get("/doctor/:Id", doctorController.getDoctorById);
router.delete("/doctor/:Id", doctorController.deleteDoctorById);
router.patch("/doctor/:Id", doctorController.updateDoctorById);


module.exports = router;