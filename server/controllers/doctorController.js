const {Users,  Doctor } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (Id, email ) => {
    return jwt.sign(
        { Id, email },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
}

class DoctorController {
    async createDoctor(req, res) {
        try {
            const { Name, Specialization, WorkExp, DepartmentId, email, password  } = req.body;

            const existingUser = await Users.findOne({ where: { email } });

            if (existingUser) {
                return res.status(401).json({ error: "Registration failed" });
            }
            const hashedPassword = await bcrypt.hash(password, 5);

            const newDoctor = await Doctor.create({
                Name,
                Specialization,
                WorkExp,
                DepartmentId,
            });

            const newUser = await Users.create({
                email: email,
                password: hashedPassword,
                IsEmployee: true,
                DoctorId: newDoctor.Id  
            });

            const token= generateJwt( newDoctor.Id, newUser.email );

            res.status(201).json(token);
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
            
            const simplifiedDoctors = doctors.map(doctor => ({
                name: doctor.Name,
                specialization: doctor.Specialization,
                workExp: doctor.WorkExp
            }));

            res.status(200).json(simplifiedDoctors);
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
