import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {createMedicalResult} from './api/medResultAPI';
const MedicalResultModal = ({ show, onHide }) => {
  const [diagnose, setDiagnose] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    // Ваша логика для отправки данных на сервер или другие действия
    // handleClose();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление медицинского результата</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
          {/* Добавьте другие поля по необходимости (врач, пациент и т. д.) */}
          <Button variant="primary" type="submit">
            Добавить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MedicalResultModal;