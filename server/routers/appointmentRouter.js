// appointmentRouter.js

const  Router  = require('express');
const router = new Router();
const appointmentController = require('../controllers/appointmentController');

router.post("/appointment/create", appointmentController.createAppointment);
router.get("/appointment", appointmentController.getAppointmentList);
router.get("/appointment/:Id", appointmentController.getAppointmentById);
router.delete("/appointment/:Id", appointmentController.deleteAppointmentById);

module.exports = router;
