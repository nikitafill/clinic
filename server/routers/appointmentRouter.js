// appointmentRouter.js

const  Router  = require('express');
const router = new Router();
const appointmentController = require('../controllers/appointmentController');

router.post("/create", appointmentController.createAppointment);
router.get("/", appointmentController.getAppointmentList);
router.get("/:Id", appointmentController.getAppointmentById);
router.delete("/:Id", appointmentController.deleteAppointmentById);

router.post("/patient", appointmentController.getAppointmentsByPatientInfo);
router.get("/doctor/:doctorId", appointmentController.getAppointmentsByDoctorId);
  
module.exports = router;
