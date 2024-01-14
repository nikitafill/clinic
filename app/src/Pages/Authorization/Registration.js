/*import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/PersonalInfoForm.css';
import { registration } from "../../Components/api/authApi";
import { useNavigate } from "react-router-dom";

const RegistrationPage =  () => {

  const [Name, setName] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [Gender, setGender] = useState("");
  const [Number, setNumber] = useState("");
  const [Adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();


  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister =  async () => {

    if (!Name || !Number || !Gender || !email || !password || !confirmPassword) {
      // Handle empty fields
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
      return;
    }

    const errorHandler = (errorMessage) => {
      // Обработка ошибки, например, вывод сообщения об ошибке пользователю
      console.error(errorMessage);
    };

    const userData = {
      Name: Name,
      Birthdate: Birthdate,
      Gender: Gender,
      Number: Number,
      Adress: Adress,
      email: email,
      password: password,
    };
    /*setUserData({
      name: Name,
      birthdate: Birthdate,
      gender: Gender,
      number: Number,
      adress: Adress,
      email: email,
      password: password,
    });*/
    //const response = await registration(email, password, Name, Birthdate, Gender, Number, Adress);
    //const response  = registration(userData);
    /*registration(userData)
    .then((data) => {
      if (!data) {
        console.error("Сервис временно недоступен");
        return;
      }
      navigate("/login")
    })
    .catch((error) => {
      console.error("Error creating service:", error);
    });*/
    /*  console.error("Error creating service:", error);
    if (response.error) {
      console.log("Ошибка регистрации:", response.error);
    } 
    else if (response.success) {
      console.log("Успешный вход!");
      navigate('/home');
    
      registration(userData)
      .then((response) => {
        if (!response) {
          setErrorMessage("Сервис временно недоступен");
          setError(true);
          return;
        }
  
        if (response.status === 500) {
          setErrorMessage("Повторите попытку позже");
          setError(true);
          return;
        }
  
        if (response.status >= 300) {
          setErrorMessage("Неверные данные аккаунта");
          setError(true);
          return;
        }
  
        setTimeout(() => {
          navigate('/login');
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.error("Error while registering user:", error);
      });

    /*registration(userData)
      .then((response) => {
        if (!response) {
          console.error("Сервис временно недоступен");
          return;
        }

        if (response.status >= 300) {
          console.error("Ошибка при создании пользователя. Код: " + response.status);
          return;
        }

        navigate("/login");
      })
      .catch((error) => {
        console.error("Error while registering user:", error);
      });
      
  };

  return (
    <div className="form-container">
      <Form className="custom-form">
        <h4 style={{ marginBottom: '2rem' }}>Укажите личные данные</h4>
        <Form.Group controlId="formName">
          <Form.Label>ФИО</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ФИО"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGender">
          <Form.Label>Пол</Form.Label>
          <Form.Control
            as="select"
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formNumber">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Введите номер телефона"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBirthdate">
          <Form.Label>Дата рождения</Form.Label>
          <Form.Control
            type="date"
            value={Birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formAdress">
          <Form.Label>Адресс</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ваш адрес"
            value={Adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Е-мейл</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Повторите ваш пароль..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={Boolean(passwordError)}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <div style={{width: "70%"}}>
          <Button
            className="custom-button"
            variant="primary"
            onClick={handleRegister}
          >
            Готово
          </Button>
        </div>
      </Form>
    </div>
  );
};
import '../../Styles/PersonalInfoForm.css';
export default RegistrationPage;*/

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { registration } from '../../Components/api/authApi';
import { useNavigate } from "react-router-dom";
import '../../Styles/PersonalInfoForm.css'; // Путь к вашему файлу стилей

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    BirthDate: '',
    Gender: '',
    Number: '',
    Adress: '',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка совпадения паролей
    if (formData.password !== confirmPassword) {
      // Обработка несовпадения паролей, например, вывод сообщения об ошибке
      console.error('Passwords do not match');
      return;
    }

    // Отправка данных на сервер
    try {
      const response = await registration(formData);
      setTimeout(() => {
        navigate('/login');
        window.location.reload();
      }, 1000);
    } catch (error) {
      // Обработка ошибок, например, вывод ошибки на страницу
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <div className="custom-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="Name" value={formData.Name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formBirthDate">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control type="date" name="BirthDate" value={formData.BirthDate} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" name="Gender" value={formData.Gender} onChange={handleChange} required>
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="Number" value={formData.Number} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="Adress" value={formData.Adress} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-primary">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;

