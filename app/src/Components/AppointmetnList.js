import React, { useState, useEffect } from 'react';
import { getAppointmentsByDoctorId, getAppointmentsByPatientInfo } from "./api/appointmentApi";
import AppointmentCard from './AppointmentCard';

function AppointmentList ({ doctorId, patientInfo }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (doctorId) {
          data = await getAppointmentsByDoctorId(doctorId);
        } else if (patientInfo) {
          data = await getAppointmentsByPatientInfo(patientInfo);
        }
        setAppointments(data);
      } catch (error) {
        /*console.error('Error fetching medical results:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }*/
    };
    }
    fetchData();
  }, [doctorId, patientInfo]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {appointments && appointments.map((appointment) => (
        <AppointmentCard key={appointment.Id} appointment={appointment} />
      ))}
    </div>
  );
};

export default AppointmentList;
