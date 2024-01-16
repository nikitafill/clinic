const { MedicalResult, Patient, Doctor } = require("../models/models");

class MedicalResultController {

    async createMedicalResult(req, res) {
        try {
            const { diagnose, conclusion, date, patientName, phoneNumber,doctorName } = req.body;
    
            // Find or create the patient based on Name and Number
            const patient = await Patient.findOne({
                where: { Name: patientName, Number: phoneNumber }
            });
            // Find the doctor based on Name
            const doctor = await Doctor.findOne({ where: { Name: doctorName } });
            // Check if patient and doctor are found
            if (!patient || !doctor) {
                return res.status(404).json({ error: "Patient or doctor not found" });
            }
            
            // Create a new MedicalResult
            const newMedicalResult = await MedicalResult.create({
                Diagnose:diagnose,
                Conclusion: conclusion,
                Date: date,
                DoctorId: doctor.Id,
                PatientId: patient.Id
            });
    
            res.status(201).json(newMedicalResult);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create medical result" });
        }
    }

    async getMedicalResultById(req, res) {
        try {
            const resultId = req.params.Id;

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
    async  getMedicalResultsByDoctorId(req, res) {
        try {
          const doctorId = req.params.doctorId;
      
          // Поиск медицинских результатов по ID врача
          const medicalResults = await MedicalResult.findAll({
            where: { DoctorId: doctorId },
            include: [
              {
                model: Doctor,
                attributes: ['Name'], // Выводим только имя доктора
              },
              {
                model: Patient,
                attributes: ['Name', 'BirthDate', 'Gender'], // Выводим имя, дату рождения и пол пациента
              },
            ],
          });
      
          if (!medicalResults || medicalResults.length === 0) {
            return res.status(404).json({ error: "Medical results not found for the given doctor" });
          }
      
          res.status(200).json(medicalResults);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Failed to get medical results by DoctorId" });
        }
    }
    async  getMedicalResultsByPatientInfo(req, res) {
        try {
          const { patientName, phoneNumber } = req.body;

          // Поиск пациента по имени и номеру телефона

          const patient = await Patient.findOne({
            where: { Name: patientName, Number: phoneNumber }
          });
      
          if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
          }
      
          // Поиск медицинских результатов по ID пациента
          const medicalResults = await MedicalResult.findAll({
            where: { PatientId: patient.Id },
            include: [
              {
                model: Doctor,
                attributes: ['Name'], // Выводим только имя доктора
              },
              {
                model: Patient,
                attributes: ['Name', 'BirthDate', 'Gender'], // Добавляем поля из модели Patient
              },
            ],
          });
      
          if (!medicalResults || medicalResults.length === 0) {
            return res.status(404).json({ error: "Medical results not found for the given patient" });
          }
      
          res.status(200).json(medicalResults);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Failed to get medical results by patient information" });
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
            const resultId = req.params.Id;
            const { Diagnose, Conclusion, Date, Doctor_Id, Patient_Id, Appointment_Id, Picture } = req.body;

            // Обновление медицинского результата
            const updatedMedicalResult = await MedicalResult.update(
                { Diagnose, Conclusion, Date, Doctor_Id, Patient_Id, Appointment_Id, Picture },
                { where: { Id: resultId } }
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
