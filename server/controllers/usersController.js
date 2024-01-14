const { Users, Patient, Doctor } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (Id, email ) => {
    return jwt.sign(
        { Id, email },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
}

class UsersController {
    async registration(req, res) {
        try {
            const { Name, BirthDate, Gender, Number, Adress, email, password } = req.body;
    
            // Проверка, существует ли уже пользователь с таким email
            const existingUser = await Users.findOne({ where: { email } });
            if (existingUser) {
                return res.status(401).json({ error: "Registration failed" });
            }
    
            // Хеширование пароля перед сохранением в базу данных
            const hashedPassword = await bcrypt.hash(password, 5);
    
            // Создание нового пациента
            const newPatient = await Patient.create({
                Name,
                BirthDate,
                Gender,
                Number,
                Adress
            });
    
            // Создание нового пользователя с привязкой к созданному пациенту
            const newUser = await Users.create({
                email: email,
                password: hashedPassword,
                IsEmployee: false,
                PatientId: newPatient.Id  // Используйте id созданного пациента
            });
    
            const token= generateJwt( newUser.Id, newUser.email );
            res.status(201).json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Registration failed", details: error.message });
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
            const token= generateJwt( user.Id, user.email,   {
                expiresIn: "1h",
            });
            
            res.status(201).json({token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Login failed" });
        }
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.Id, req.user.email);
        return res.json({ token });
    }
    /*async updateRole(req, res) {
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
    }*/
}

module.exports = new UsersController();
