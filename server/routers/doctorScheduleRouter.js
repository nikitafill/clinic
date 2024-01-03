const { Router } = require('express');
const router = new Router();
const doctorScheduleController = require('../controllers/doctorScheduleController');

/*router.post("/", doctorScheduleController.createDoctorSchedule);
router.get("/", doctorScheduleController.getDoctorScheduleList);
router.get("/:id", doctorScheduleController.getDoctorScheduleById);
router.delete("/:id", doctorScheduleController.deleteDoctorScheduleById);
router.patch("/:id", doctorScheduleController.updateDoctorScheduleById);*/

module.exports = router;