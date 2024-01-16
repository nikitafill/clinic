import React, {useState} from 'react';
import {Container, Form} from "react-bootstrap";
import MedicalResultsList from '../Components/MedicalResultList';
import AppointmentList from '../Components/AppointmetnList';
import {getMedicalResultsByPatientInfo} from '../Components/api/medResultAPI';
import { getAppointmentsByPatientInfo } from '../Components/api/appointmentApi'

function Profile (){
    //const [patientInfo, setPatientInfo] = useState({ Name: '', Number: '' });
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPatientNumber]= useState('');
    const [medicalResults, setMedicalResults] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const patient = {
        patientName,
        phoneNumber
    };
    const handleSearch = async () => {
    //e.preventDefault();
    try {
      if (!patient.patientName || !patient.phoneNumber) {
        console.error('Invalid patient information');
        return;
      }
      const data = await getMedicalResultsByPatientInfo(patient);
      console.log("Fetched service data:", data);
      setMedicalResults(data);
      data = await getAppointmentsByPatientInfo(patient);
      console.log("Fetched service data:", data);
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching medical results:', error);
    }
    };

    return (

        <Container className="d-flex flex-column" style={{ marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontWeight: 'bold', marginBottom: '64px', textAlign: 'center' }}>Медицинские результаты</h2>
            <MedicalResultsList patientInfo={patient} />
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontWeight: 'bold', marginBottom: '64px', textAlign: 'center' }}>Записи</h2>
            <AppointmentList patientInfo={patient}/>
            <Form>
                    <Form.Group controlId="formPatientName">
                    <Form.Label>Имя пациента:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите имя пациента"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Номер телефона пациента:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите номер телефона"
                        value={phoneNumber}
                        onChange={(e) => setPatientNumber(e.target.value)}
                    />
                    </Form.Group>
            </Form>
        </Container>
    );
};

export default Profile;