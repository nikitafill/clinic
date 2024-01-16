import React, { useState } from "react";
import { Container, Form, Card, Button, Row, Alert } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE, USER_MAIN_MENU_ROUTE } from "../../Utilts/consts";
import { login } from "../../Components/api/authApi";
import "../../Styles/Auth.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async () => {
    const response = await login(email, password);

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
    localStorage.setItem("token", response.token);
    localStorage.setItem("isEmployee", response.isEmployee);
    /*if (rememberMe) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("isEmployee", response.isEmployee);
    } else {
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("isEmployee", response.isEmployee);
    }*/

    setTimeout(() => {
      navigate('/home');
      window.location.reload();
    }, 1000);
  };

  return (
    <Container className="container-style">
      <Card className="card-style p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="form-style">
          <Form.Control
            className="form-control-style"
            placeholder="Введите ваш email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="form-control-style"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Form.Check
            className="checkbox-style"
            type="checkbox"
            label="Запомнить меня"
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Row className="row-style">
            <div>
              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
            </div>
            <Button variant="primary" className="button-style" onClick={submit}>
              <div>Войти!</div>
            </Button>
          </Row>
        </Form>

        {/* Snackbar с ошибкой */}
        {error && (
          <Alert variant="danger" className="mt-3" onClose={() => setError(false)} dismissible>
            {errorMessage}
          </Alert>
        )}
      </Card>
    </Container>
  );
};

export default LoginPage;
 