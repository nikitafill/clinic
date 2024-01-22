import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';
import { getSchedule } from './api/doctorScheduleApi';

const Schedule = ({ doctorId }) => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        // Ваш запрос на сервер для получения расписания по Id врача
        const data = await getSchedule(doctorId);
        setScheduleData(data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, [doctorId]);

  return (
    <div>
      <h2>Schedule</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>День недели</th>
            <th>Начало работы</th>
            <th>Конец работы</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item) => (
            <tr key={item.Id}>
              <td>{item.Day_of_week}</td>
              <td>{item.Start}</td>
              <td>{item.End}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Schedule;