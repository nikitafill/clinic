const { Users, Patient, Doctor } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UsersController {
    async registration(req, res) {
        try {
            const { email, password, role, patientData } = req.body;

            // Проверка, существует ли уже пользователь с таким email
            const existingUser = await Users.findOne({ where: { email } });

            if (existingUser) {
                return res.status(400).json({ error: "User with this email already exists" });
            }

            // Хеширование пароля перед сохранением в базу данных
            const hashedPassword = await bcrypt.hash(password, 10);

            // Создание нового пользователя
            const newUser = await Users.create({
                email,
                password: hashedPassword,
                IsEmployee: false,
            });

            // Создание записи в таблице Patient
            await Patient.create({
                Name: patientData.name,
                BirthDate: patientData.birthDate,
                Gender: patientData.gender,
                Number: patientData.number,
                Adress: patientData.adress,
                UserId: newUser.id,
            });

            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Registration failed" });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Поиск пользователя по email
            const user = await Users.findOne({ where: { email } });

            if (!user) {
                return res.status(401).json({ error: "Authentication failed" });
            }

            // Сравнение хешированного пароля
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: "Authentication failed" });
            }

            // Генерация JWT токена
            const token = jwt.sign({ userId: user.id, role: user.IsEmployee ? 'Admin' : 'User' }, process.env.SECRET_KEY, {
                expiresIn: "1h",
            });

            res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Login failed" });
        }
    }

    async updateRole(req, res) {
        try {
            const { email, role, doctorData } = req.body;

            // Найти пользователя в базе данных по email
            const user = await Users.findOne({ where: { email } });

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Проверка, чтобы избежать изменения роли пользователя на "Doctor",
            // если он уже является работником
            if (user.IsEmployee) {
                return res.status(400).json({ error: "User is already an employee" });
            }

            // Удаление записи из таблицы Patient
            await Patient.destroy({ where: { UserId: user.id } });

            // Вернуть подтверждение клиенту для второго этапа
            res.status(200).json({ confirmation: true });

            // Обработка второго этапа (ввод данных доктора)
            const { name, specialization, workExp, departmentId } = doctorData;

            // Создать новую запись в соответствующей таблице (например, "Doctor")
            const doctor = await Doctor.create({
                Name: name,
                Specialization: specialization,
                WorkExp: workExp,
                Department_Id: departmentId,
            });

            // Обновить запись пользователя
            await user.update({
                Doctor_Id: doctor.id,
                IsEmployee: true,
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Role update failed" });
        }
    }
}

module.exports = new UsersController();
