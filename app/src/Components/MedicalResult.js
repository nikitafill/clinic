import React from 'react';
import { Card } from 'react-bootstrap';

const MedicalResult = ({ result }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>Диагноз:{result.Diagnose}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Заключение: {result.Conclusion}</Card.Subtitle>
        <Card.Text>
          Дата: {result.Date}<br />
          Имя пациента: {result.Patient.Name}<br />
          Пол: {result.Patient.Gender}<br />
          Дата рождения: {result.Patient.BirthDate}<br />
          Врач: {result.Doctor.Name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MedicalResult;