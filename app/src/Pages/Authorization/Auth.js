import React, { useState } from "react";
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../../Utilts/consts"; 
import { login } from "../../Components/api/authAPI";
import "../../Styles/Auth.css";
const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    // Ваша логика входа
    // ...
    const response = await login(loginData);

      if (!response) {
          console.log("Сервис временно недоступен")
          return;
      }

      if (response.status === 500) {
          console.log("Повторите попытку позже");
          return;
      }

      if (response.status >= 300) {
          console.log("Неверные данные аккаунта");
          return;
      }
    // Пример обработки успешного входа
    if (rememberMe) {
      // Сохранить токен в локальное хранилище для постоянной сессии
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
    } else {
      // Сохранить токен в хранилище сеанса для одной сессии
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("role", response.data.role);
    }

    window.location.reload();
  };

  return (
    <Container className="container-style">
    <Card className="card-style p-5">
    <h2 className="m-auto">Авторизация</h2>
    <Form className="form-style">
      <Form.Control
        className="form-control-style"
        placeholder="Введите ваш email..."
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <Form.Control
        className="form-control-style"
        placeholder="Введите ваш пароль..."
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
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
        <Button variant="primary"  className="button-style" onClick={submit}>
          Войти
        </Button>
      </Row>
    </Form>
    </Card>
    </Container>

  );
};

export default LoginPage; 