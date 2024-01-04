// appointmentRouter.js

const  Router  = require('express');
const router = new Router();
const appointmentController = require('../controllers/appointmentController');

router.post("/", appointmentController.createAppointment);
router.get("/", appointmentController.getAppointmentList);
router.get("/:id", appointmentController.getAppointmentById);
router.delete("/:id", appointmentController.deleteAppointmentById);

module.exports = router;
