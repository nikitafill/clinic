//const { Appointment } = require("../models/models");
const { Appointment, Patient, Department, Doctor, Service } = require("../models/models");

class AppointmentController {
    async createAppointment(req, res) {
        try {
            const {
                fullName,
                phoneNumber,
                gender,
                date,
                departmentName,
                doctorName,
                serviceName,
            } = req.body;

            // Проверка наличия необходимых данных в запросе
            if (!fullName || !phoneNumber  || !gender || !date || !departmentName || !doctorName || !serviceName) {
                return res.status(400).json({ error: "Missing required data" });
            }

            // Поиск или создание пациента
            let patientId;
            const existingPatient = await Patient.findOne({ where: { Name: fullName, Number: phoneNumber} });
            if (existingPatient) {
                patientId = existingPatient.Id;
            } else {
                const newPatient = await Patient.create({
                    Name: fullName,
                    Number: phoneNumber,
                    Gender: gender
                    // Добавьте другие поля пациента, если необходимо
                });
                patientId = newPatient.Id;
            }

            // Поиск отделения по названию
            const department = await Department.findOne({ where: { Name: departmentName } });
            if (!department) {
                return res.status(404).json({ error: "Department not found" });
            }

            // Поиск врача по названию и отделению
            const doctor = await Doctor.findOne({ where: { Name: doctorName, DepartmentId: department.Id } });
            if (!doctor) {
                return res.status(404).json({ error: "Doctor not found" });
            }

            // Поиск услуги по названию и отделению
            const service = await Service.findOne({ where: { Name: serviceName, DepartmentId: department.Id } });
            if (!service) {
                return res.status(404).json({ error: "Service not found" });
            }

            // Создание записи на прием
            const appointment = await Appointment.create({
                Date: date,
                DoctorId: doctor.Id,
                PatientId: patientId,
                ServiceId: service.Id
            });

            res.status(201).json({ appointmentId: appointment.Id, message: "Appointment created successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create appointment" });
        }
    }
    async  getAppointmentsByDoctorId(req, res) {
        try {
          const doctorId = req.params.doctorId;
      
          // Поиск медицинских результатов по ID врача
          const appointments = await Appointment.findAll({
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
              {
                model: Service,
                attributes: ['Name'], 
              },
            ],
          });
      
          if (!appointments || appointments.length === 0) {
            return res.status(404).json({ error: "Medical results not found for the given doctor" });
          }
      
          res.status(200).json(appointments);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Failed to get medical results by DoctorId" });
        }
    }
    async  getAppointmentsByPatientInfo(req, res) {
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
          const appointments = await Appointment.findAll({
            where: { PatientId: patient.Id },
            include: [
                {
                  model: Doctor,
                  attributes: ['Name'], // Выводим только имя доктора
                },
                {
                  model: Patient,
                  attributes: ['Name', 'BirthDate', 'Gender'], // Выводим имя, дату рождения и пол пациента
                },
                {
                  model: Service,
                  attributes: ['Name'], 
                },
              ],
          });
      
          if (!appointments || appointments.length === 0) {
            return res.status(404).json({ error: "Medical results not found for the given patient" });
          }
      
          res.status(200).json(appointments);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Failed to get medical results by patient information" });
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