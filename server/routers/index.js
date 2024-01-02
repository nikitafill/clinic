const Router = require('express');
const router = new Router();
const appointmentRouter = require('./appointmentRouter');
const departmentRouter = require('./departmentRouter');
const doctorRouter = require('./doctorRouter');
const doctorScheduleRouter = require('./doctorScheduleRouter');
const medicalResultRouter = require('./medicalResultRouter');
const patientRouter = require("./patientRouter");
const serviceRouter = require("./serviceRouter");
const usersRouter = require("./usersRouter");

//const usersMiddleware = require("../middleware/authMiddleware");

router.use('/users', usersRouter);
router.use('/service', serviceRouter);
router.use('/patient', patientRouter);
router.use('/medicalResult', medicalResultRouter);
router.use('/doctorSchedule', doctorScheduleRouter);
router.use('/doctor', doctorRouter);
router.use('/appointment', appointmentRouter);
router.use('/department', departmentRouter);
//router.use("/api", usersMiddleware);

module.exports = router;