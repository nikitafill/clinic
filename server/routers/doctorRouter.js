const Router = require('express');
const router = new Router();
const doctorController = require('../controllers/doctorController');

router.post("/create", doctorController.createDoctor);
router.get("/", doctorController.getDoctorList);
router.get("/:Id", doctorController.getDoctorById);
router.delete("/:Id", doctorController.deleteDoctorById);
router.patch("/:Id", doctorController.updateDoctorById);


module.exports = router;