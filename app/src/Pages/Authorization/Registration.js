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
        <h2 className="m-auto">Регистрация</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>ФИО</Form.Label>
            <Form.Control type="text" name="Name" value={formData.Name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formBirthDate">
            <Form.Label>Дата рождения</Form.Label>
            <Form.Control type="date" name="BirthDate" value={formData.BirthDate} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Пол</Form.Label>
            <Form.Control as="select" name="Gender" value={formData.Gender} onChange={handleChange} required>
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formNumber">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control type="text" name="Number" value={formData.Number} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Адресс</Form.Label>
            <Form.Control type="text" name="Adress" value={formData.Adress} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Подтвердите пароль</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-primary">
            Зарегестрироваться
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;

