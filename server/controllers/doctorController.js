const { Doctor } = require("../models/models");

class DoctorController {
    async createDoctor(req, res) {
        try {
            const { Name, Specialization, WorkExp, Department_Id } = req.body;

            // Создание нового доктора
            const newDoctor = await Doctor.create({
                Name,
                Specialization,
                WorkExp,
                Department_Id,
            });

            res.status(201).json(newDoctor);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create doctor" });
        }
    }

    async deleteDoctorById(req, res) {
        try {
            const doctorId = req.params.id;

            // Удаление доктора по ID
            const deletedDoctor = await Doctor.destroy({
                where: { ID: doctorId },
            });

            if (!deletedDoctor) {
                return res.status(404).json({ error: "Doctor not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete doctor" });
        }
    }

    async getDoctorById(req, res) {
        try {
            const doctorId = req.params.id;

            // Поиск доктора по ID
            const doctor = await Doctor.findByPk(doctorId);

            if (!doctor) {
                return res.status(404).json({ error: "Doctor not found" });
            }

            res.status(200).json(doctor);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get doctor by ID" });
        }
    }

    async getDoctorList(req, res) {
        try {
            // Получение списка всех докторов
            const doctors = await Doctor.findAll();

            res.status(200).json(doctors);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get doctor list" });
        }
    }

    async updateDoctorById(req, res) {
        try {
            const doctorId = req.params.id;
            const { Name, Specialization, WorkExp, Department_Id } = req.body;

            // Обновление информации о докторе
            const updatedDoctor = await Doctor.update(
                { Name, Specialization, WorkExp, Department_Id },
                { where: { ID: doctorId } }
            );

            if (!updatedDoctor[0]) {
                return res.status(404).json({ error: "Doctor not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update doctor" });
        }
    }
}

module.exports = new DoctorController();
