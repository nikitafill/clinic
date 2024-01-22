const { Users, Patient, Doctor } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (Id, email,IsEmployee) => {
    return jwt.sign(
        { Id, email,IsEmployee},
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
    
            const token= generateJwt( newUser.Id, newUser.email, newUser.IsEmployee );
            res.status(201).json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Registration failed", details: error.message });
        }
    }
    

    async login(req, res) {
        try {
            const { email, password } = req.body;

            if(!email || !password){
                return res.status(401).json({ error: "Authentication failed" });
            }
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
            const token= generateJwt( user.Id, user.email,user.IsEmployee);
            
            res.status(201).json({token, isEmployee: user.IsEmployee});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Login failed" });
        }
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.Id, req.users.email, req.users.IsEmployee);
        return res.json({ token });
    }
}

module.exports = new UsersController();
