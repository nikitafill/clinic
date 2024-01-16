const { DoctorSchedule } = require("../models/models");

class DoctorScheduleController {
    async createDoctorSchedule(req, res) {
        try {
            const { Doctors_Id, Day_of_week, Start, End } = req.body;

            // Создание нового расписания
            const newSchedule = await DoctorSchedule.create({
                Doctors_Id,
                Day_of_week,
                Start,
                End,
            });

            res.status(201).json(newSchedule);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create doctor schedule" });
        }
    }

    async deleteDoctorScheduleById(req, res) {
        try {
            const scheduleId = req.params.id;

            // Удаление расписания по ID
            const deletedSchedule = await DoctorSchedule.destroy({
                where: { ID: scheduleId },
            });

            if (!deletedSchedule) {
                return res.status(404).json({ error: "Doctor schedule not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete doctor schedule" });
        }
    }
    async getDoctorScheduleById(req, res) {
        try {
          const doctorId = req.params.doctorId;
      
          // Поиск расписания по DoctorId
          const schedules = await DoctorSchedule.findAll({
            where: { DoctorId: doctorId }
          });
      
          if (!schedules || schedules.length === 0) {
            return res.status(404).json({ error: "Doctor schedules not found" });
          }
      
          res.status(200).json(schedules);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Failed to get doctor schedule by DoctorId" });
        }
    }
      

    async updateDoctorScheduleById(req, res) {
        try {
            const scheduleId = req.params.id;
            const { Doctors_Id, Day_of_week, Start, End } = req.body;

            // Обновление расписания
            const updatedSchedule = await DoctorSchedule.update(
                { Doctors_Id, Day_of_week, Start, End },
                { where: { ID: scheduleId } }
            );

            if (!updatedSchedule[0]) {
                return res.status(404).json({ error: "Doctor schedule not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update doctor schedule" });
        }
    }
}

module.exports = new DoctorScheduleController();
