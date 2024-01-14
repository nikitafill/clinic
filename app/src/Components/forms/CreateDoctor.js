import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createDoctor } from "../api/doctorApi";
import { useNavigate } from "react-router-dom";

const CreateDoctor = ({ setUserData }) => {

  const [Name, setName] = useState('');
  const [Specialization, setSpecialization] = useState('');
  const [WorkExp, setWorkExp] = useState('');
  const [DepartmentId, setDepartmentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!Name || !Specialization || !WorkExp || !DepartmentId || !email || !password || !confirmPassword) {
      // Handle empty fields
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
      return;
    }

    setUserData({
      Name,
      Specialization,
      WorkExp,
      DepartmentId,
      email,
      password,
    });

    createDoctor(email, password)
      .then((response) => {
        if (!response) {
          console.error("Сервис временно недоступен");
          return;
        }

        if (response.status >= 300) {
          console.error("Ошибка при создании пользователя. Код: " + response.status);
          return;
        }
      })
      .catch((error) => {
        console.error("Error while registering user:", error);
      });
  };

  return (
    <div className="form-container">
      <Form className="custom-form">
        <h4 style={{ marginBottom: '2rem' }}>Укажите данные о враче</h4>
        <Form.Group controlId="formName">
          <Form.Label>ФИО</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ФИО"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formSpecialization">
          <Form.Label>Специализация</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите специализацию"
            value={Specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formWorkExp">
          <Form.Label>Стаж работы</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите стаж работы"
            value={WorkExp}
            onChange={(e) => setWorkExp(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDepartmentId">
          <Form.Label>ID отделения</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ID отделения"
            value={DepartmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
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

        <Button
          className="custom-button"
          variant="primary"
          onClick={handleRegister}
        >
          Добавить врача
        </Button>
      </Form>
    </div>
  );
};

export default CreateDoctor;
