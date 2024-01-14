const { Router } = require('express');
const router = new Router();
const doctorScheduleController = require('../controllers/doctorScheduleController');

router.post("/create", doctorScheduleController.createDoctorSchedule);
router.get("/:Id", doctorScheduleController.getDoctorScheduleById);
router.delete("/:Id", doctorScheduleController.deleteDoctorScheduleById);
router.patch("/:Id", doctorScheduleController.updateDoctorScheduleById);

module.exports = router;