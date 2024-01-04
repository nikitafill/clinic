const { Router } = require('express');
const router = new Router();
const doctorScheduleController = require('../controllers/doctorScheduleController');

router.post("/doctorSchedule/create", doctorScheduleController.createDoctorSchedule);
router.get("/doctorSchedule/:Id", doctorScheduleController.getDoctorScheduleById);
router.delete("/doctorSchedule/:Id", doctorScheduleController.deleteDoctorScheduleById);
router.patch("/doctorSchedule/:Id", doctorScheduleController.updateDoctorScheduleById);

module.exports = router;