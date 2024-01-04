const { Appointment } = require("../models/models");

class AppointmentController {
    async createAppointment(req, res) {
        try {
            const { Patient_Id, Service_Id, Date, Doctor_Id } = req.body;
            
            // Создание новой записи о приеме
            const newAppointment = await Appointment.create({
                Patient_Id,
                Service_Id,
                Date,
                Doctor_Id,
            });

            res.status(201).json(newAppointment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create appointment" });
        }
    }

    async getAppointmentById(req, res) {
        try {
            const appointmentId = req.params.id;

            // Поиск записи о приеме по ID
            const appointment = await Appointment.findByPk(appointmentId);

            if (!appointment) {
                return res.status(404).json({ error: "Appointment not found" });
            }

            res.status(200).json(appointment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get appointment by ID" });
        }
    }

    async getAppointmentList(req, res) {
        try {
            // Получение списка всех приемов
            const appointments = await Appointment.findAll();

            res.status(200).json(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get appointment list" });
        }
    }

    async deleteAppointmentById(req, res) {
        try {
            const appointmentId = req.params.id;

            // Поиск записи о приеме по ID и удаление
            const deletedAppointment = await Appointment.destroy({
                where: { ID: appointmentId },
            });

            if (!deletedAppointment) {
                return res.status(404).json({ error: "Appointment not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete appointment by ID" });
        }
    }
}

module.exports = new AppointmentController();