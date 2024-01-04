const { MedicalResult } = require("../models/models");

class MedicalResultController {
    async createMedicalResult(req, res) {
        try {
            const { Diagnose, Conclusion, Date, Doctor_Id, Patient_Id, Appointment_Id, Picture } = req.body;

            // Создание нового медицинского результата
            const newMedicalResult = await MedicalResult.create({
                Diagnose,
                Conclusion,
                Date,
                Doctor_Id,
                Patient_Id,
                Appointment_Id,
                Picture,
            });

            res.status(201).json(newMedicalResult);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create medical result" });
        }
    }

    async getMedicalResultById(req, res) {
        try {
            const resultId = req.params.id;

            // Поиск медицинского результата по ID
            const medicalResult = await MedicalResult.findByPk(resultId);

            if (!medicalResult) {
                return res.status(404).json({ error: "Medical result not found" });
            }

            res.status(200).json(medicalResult);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get medical result by ID" });
        }
    }

    async getMedicalResultList(req, res) {
        try {
            // Получение списка всех медицинских результатов
            const medicalResults = await MedicalResult.findAll();

            res.status(200).json(medicalResults);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get medical result list" });
        }
    }

    async updateMedicalResultById(req, res) {
        try {
            const resultId = req.params.id;
            const { Diagnose, Conclusion, Date, Doctor_Id, Patient_Id, Appointment_Id, Picture } = req.body;

            // Обновление медицинского результата
            const updatedMedicalResult = await MedicalResult.update(
                { Diagnose, Conclusion, Date, Doctor_Id, Patient_Id, Appointment_Id, Picture },
                { where: { ID: resultId } }
            );

            if (!updatedMedicalResult[0]) {
                return res.status(404).json({ error: "Medical result not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update medical result" });
        }
    }
}

module.exports = new MedicalResultController();
