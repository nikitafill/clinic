const { Patient } = require("../models/models");

class PatientController {
    async createPatient(req, res) {
        try {
            const { Name, BirthDate, Gender, Number, Address } = req.body;

            // Создание нового пациента
            const newPatient = await Patient.create({
                Name,
                BirthDate,
                Gender,
                Number,
                Address,
            });

            res.status(201).json(newPatient);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create patient" });
        }
    }

    async deletePatientById(req, res) {
        try {
            const patientId = req.params.id;

            // Удаление пациента по ID
            const deletedPatient = await Patient.destroy({
                where: { ID: patientId },
            });

            if (!deletedPatient) {
                return res.status(404).json({ error: "Patient not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete patient" });
        }
    }

    async getPatientById(req, res) {
        try {
            const patientId = req.params.id;

            // Поиск пациента по ID
            const patient = await Patient.findByPk(patientId);

            if (!patient) {
                return res.status(404).json({ error: "Patient not found" });
            }

            res.status(200).json(patient);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get patient by ID" });
        }
    }

    async getPatientList(req, res) {
        try {
            // Получение списка всех пациентов
            const patients = await Patient.findAll();

            res.status(200).json(patients);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get patient list" });
        }
    }

    async updatePatientById(req, res) {
        try {
            const patientId = req.params.id;
            const { Name, BirthDate, Gender, Number, Address } = req.body;

            // Обновление информации о пациенте
            const updatedPatient = await Patient.update(
                { Name, BirthDate, Gender, Number, Address },
                { where: { ID: patientId } }
            );

            if (!updatedPatient[0]) {
                return res.status(404).json({ error: "Patient not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update patient" });
        }
    }
}

module.exports = new PatientController();
