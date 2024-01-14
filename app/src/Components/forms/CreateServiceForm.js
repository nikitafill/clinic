import React, {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../Styles/ServiceForm.css'; // Импорт ваших пользовательских стилей
import { createService } from "../api/servicesAPI";
import { useNavigate } from "react-router-dom";

const CreateServiceForm = () => {
  const navigate = useNavigate();
  const [serviceName, setServiceName] = useState('');
  const [cost, setCost] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  const handleAddService = () => {
    // Проверка на валидность serviceName, cost, specialization, departmentId
    if (!serviceName || !cost || !specialization || !departmentId) {
      // Обработка пустых полей
      return;
    }

    const errorHandler = (errorMessage) => {
      // Обработка ошибки, например, вывод сообщения об ошибке пользователю
      console.error(errorMessage);
    };

    const serviceData = {
      Name: serviceName,
      Cost: cost,
      Specialization: specialization,
      DepartmentId: departmentId,
    };
    createService(serviceData)
        .then((data) => {
            navigate("/prices")
        })
        .catch((error) => {
            console.error("Error creating service:", error);
    });
  };

  return (
    <div className="form-container">
      <Form className="custom-form">
        <h4 style={{ marginBottom: '2rem' }}>Добавление услуги</h4>
        <Form.Group controlId="formServiceName">
          <Form.Label>Наименование услуги</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите наименование услуги"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formCost">
          <Form.Label>Стоимость</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите стоимость услуги"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formSpecialization">
          <Form.Label>Специализация</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите специализацию услуги"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDepartmentId">
          <Form.Label>Идентификатор отдела</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите идентификатор отдела"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
          />
        </Form.Group>
        <Button
          className="custom-button"
          variant="primary"
          onClick={handleAddService}
        >
          Добавить услугу
        </Button>
      </Form>
    </div>
  );
};

export default CreateServiceForm;
