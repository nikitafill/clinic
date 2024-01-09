// AuthDataForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
//import '../../Styles/AuthDataForm.css'; // Import your custom styles

const AuthDataForm = ({ onNext, setUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNext = (e) => {
    e.preventDefault();

    // Validate email, password, and confirmPassword
    if (!email || !password || !confirmPassword) {
      // Handle empty fields
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
      return;
    }

    setUserData((prevUserData) => ({
      ...prevUserData,
      email: email,
      password: password,
    }));

    // Handle successful validation
    onNext();
  };

  return (
    <div className="form-container">
      <Form className="custom-form" onSubmit={handleNext}>
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
        <div style ={{backgroundColor: '#1A8EFD', color: 'white', }}>
        <Button variant="primary" type="submit" style={{ backgroundColor: '#1A8EFD', color: 'white', }}>
        Далее
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default AuthDataForm;
