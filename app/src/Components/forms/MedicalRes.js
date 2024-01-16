import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createMedicalResult } from '../api/medResultAPI';

const MedicalResultModal = ({ show, onHide }) => {
  const [diagnose, setDiagnose] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [date, setDate] = useState('');
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handleSubmit = () => {
    // Prepare data to be sent to the server
    const medicalResultData = {
      diagnose,
      conclusion,
      date,
      patientName,
      phoneNumber,
      doctorName,
    };

    // Example: send data to the server using the createMedicalResult function
    createMedicalResult(medicalResultData)
      .then((response) => {
        // Handle success if needed
        console.log('Medical result added successfully:', response);
        // Additional logic...
      })
      .catch((error) => {
        // Handle error if needed
        console.error('Failed to add medical result:', error);
        // Additional error handling...
      });

    // Clear form fields
    setDiagnose('');
    setConclusion('');
    setDate('');
    setPatientName('');
    setPhoneNumber('');
    setDoctorName('');

    // Close the modal
    onHide();
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
          {/* Add fields for patient name, phone number, and doctor name */}
          <Form.Group controlId="formPatientName">
            <Form.Label>Имя пациента</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя пациента"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите номер телефона"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDoctorName">
            <Form.Label>Имя доктора</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя доктора"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Добавить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MedicalResultModal;
