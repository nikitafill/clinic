import React, { useState } from "react";
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useNavigate  } from "react-router-dom";
import { REGISTRATION_ROUTE, USER_MAIN_MENU_ROUTE } from "../../Utilts/consts"; 
import { login } from "../../Components/api/authApi";
import "../../Styles/Auth.css";

const LoginPage = () =>{ 

  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const submit = async () => {
    // Ваша логика входа
    const response = await login(email,password);
  
    if (response.error) {
      console.log("Ошибка входа:", response.error);
    } else if (response.success) {
      console.log("Успешный вход!");
      if (rememberMe) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("isEmployee", response.isEmployee);
      } else {
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("isEmployee", response.isEmployee);
      }
    }
    navigate(USER_MAIN_MENU_ROUTE);
  }
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
        onChange={(e) => setEmail(e.target.value )}
      />
      <Form.Control
        className="form-control-style"
        placeholder="Введите ваш пароль..."
        value={password}
        onChange={(e) => setPassword( e.target.value )}
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
          <div>
            Войти!
          </div>
        </Button>
      </Row>
    </Form>
    </Card>
    </Container>

  );
};

export default LoginPage; 