import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createMedicalResult } from "../api/medResultAPI";

const MedicalResultForm = ({ patientId, onMedicalResultAdded }) => {
  const [diagnose, setDiagnose] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState(''); // Добавлено поле для ввода doctorId
  const [appointmentId, setAppointmentId] = useState(''); // Добавлено поле для ввода appointmentId

  const handleCreateMedicalResult = async (e) => {
    e.preventDefault();

    // Проверка на валидность данных
    if (!diagnose || !date) {
      // Обработка пустых полей
      return;
    }

    const medicalResultData = {
      diagnose: diagnose,
      conclusion: conclusion,
      date: date,
      doctorId: doctorId,
      patientId: patientId,
      appointmentId: appointmentId,
    };

    try {
      const response = await createMedicalResult(patientId, medicalResultData);

      if (response.status >= 300) {
        console.error("Ошибка при создании медицинского результата. Код: " + response.status);
        return;
      }

      // Успешное создание медицинского результата, вызываем callback для обновления данных на родительской странице
      onMedicalResultAdded();
    } catch (error) {
      console.log("Error while creating medical result:", error);
    }
  };

  return (
    <div className="form-container">
      <Form className="custom-form" onSubmit={handleCreateMedicalResult}>
        <h4 style={{ marginBottom: '2rem' }}>Введите медицинский результат</h4>
        <Form.Group controlId="formDiagnose">
          <Form.Label>Диагноз</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите диагноз"
            value={diagnose}
            onChange={(e) => setDiagnose(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formConclusion">
          <Form.Label>Заключение</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите заключение"
            value={conclusion}
            onChange={(e) => setConclusion(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Дата</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDoctorId">
          <Form.Label>Идентификатор врача</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите идентификатор врача"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formAppointmentId">
          <Form.Label>Идентификатор назначения</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите идентификатор назначения"
            value={appointmentId}
            onChange={(e) => setAppointmentId(e.target.value)}
          />
        </Form.Group>
        <Button
          className="custom-button"
          variant="primary"
          type="submit"
        >
          Создать медицинский результат
        </Button>
      </Form>
    </div>
  );
};

export default MedicalResultForm;

