import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/PersonalInfoForm.css';
import { registration } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const CombinedForm = ({ setUserData }) => {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Birthdate, setBirthdate] = useState('');
  const [Gender, setGender] = useState('');
  const [Number, setNumber] = useState('');
  const [Adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!Name || !Number || !Gender || !email || !password || !confirmPassword) {
      // Handle empty fields
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
      return;
    }

    setUserData({
      name: Name,
      birthdate: Birthdate,
      gender: Gender,
      number: Number,
      adress: Adress,
      email: email,
      password: password,
    });

    registration(email, password)
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

        {/* AuthDataForm Fields */}
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

        <div style={{ backgroundColor: '#1A8EFD', color: 'white' }}>
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

export default CombinedForm;
