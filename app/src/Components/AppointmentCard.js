import React from 'react';
import { Card } from 'react-bootstrap';

const AppointmentCard = ({ appointment }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>Запись на {appointment.Service.Name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Дата: {appointment.Date}</Card.Subtitle>
        <Card.Text>
          Имя пациента: {appointment.Patient.Name}<br />
          Пол: {appointment.Patient.Gender}<br />
          Дата рождения: {appointment.Patient.BirthDate}<br />
          Врач: {appointment.Doctor.Name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AppointmentCard;