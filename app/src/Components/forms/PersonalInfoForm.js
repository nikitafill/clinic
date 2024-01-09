import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт Bootstrap CSS
import '../../Styles/PersonalInfoForm.css'; // Импорт ваших пользовательских стилей
import { registration } from "../api/authAPI";
import { useNavigate } from "react-router-dom";

const PersonalInfoForm = ({ userData, setUserData }) => {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Birthdate, setBirthdate] = useState('');
  const [Gender, setGender] = useState('');
  const [Number, setNumber] = useState('');
  const [Adress, setAdress] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!Name || !Number || !Gender) {
      // Обработка пустых полей
      return;
    }

    const errorHandler = (errorMessage) => {
      // Обработка ошибки, например, вывод сообщения об ошибке пользователю
      console.error(errorMessage);
    };

    setUserData((prevUserData) => ({
      ...prevUserData,
      name: Name,
      birthdate: Birthdate,
      gender: Gender,
      number: Number,
      adress: Adress,
    }));

    registration(userData)
      .then((response) => {
        if (!response) {
          errorHandler("Сервис временно недоступен");
          return;
        }

        if (response.status >= 300) {
          errorHandler("Ошибка при создании пользователя. Код: " + response.status);
          return;
        }

        navigate("/login");
      })
      .catch((error) => {
        console.log("Error while registering user:", error);
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
        <Button
          className="custom-button"
          variant="primary"
          onClick={handleRegister}
          useNavigate="login"
        >
          Готово
        </Button>
      </Form>
    </div>
  );
};

export default PersonalInfoForm;

