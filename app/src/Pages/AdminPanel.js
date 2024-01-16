import React, {useState, useEffect} from 'react';
import {Button, Container, Form, Modal} from "react-bootstrap";
import CreateDoctor from "../Components/forms/CreateDoctor";
import CreateMedResult from "../Components/forms/CreateMedResult";
import CreateServiceForm from "../Components/forms/CreateServiceForm";
import Schedule from '../Components/Schedule';
import { getSchedule } from '../Components/api/doctorScheduleApi';
import MedicalResultsList from '../Components/MedicalResultList';
import AppointmentList from '../Components/AppointmetnList';
import {getMedicalResultsByPatientInfo} from '../Components/api/medResultAPI';
import { getAppointmentsByPatientInfo } from '../Components/api/appointmentApi'




const AdminPanel = () => {

  const [doctorVisible, setDoctor] = useState(false);
  const [medResultVisible, setMedResult] = useState(false);
  const [serviceVisible, setService] = useState(false);
  //const [patientInfo, setPatientInfo] = useState({ Name: '', Number: '' });
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPatientNumber]= useState('');
  const [showModal, setShowModal] = useState(false);
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
      setShowModal(false);
    } catch (error) {
      console.error('Error fetching medical results:', error);
    }
  };
  //const [doctorId, setDoctorId] = useState(null);
  /*const handleConfirmId = async () => {
    try {
      // Ваш запрос на сервер для подтверждения ID врача
      const response = await getSchedule(doctorId); // или другой подход для подтверждения ID
      const data = await response.json();
      if (data) {
        // Обработка успешного подтверждения ID, если необходимо
      } else {
        // Обработка неуспешного подтверждения ID, если необходимо
      }
    } catch (error) {
      console.error('Error confirming ID:', error);
    }
    };*/
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

            <Button
                variant="primary"
                className="mt-4 p-2"
                onClick={() => setDoctor(!doctorVisible)}
            >
                Добавить врача
            </Button>
            {doctorVisible && <CreateDoctor onHide={() => setDoctor(false)} />}

            <Button
                variant="primary"
                className="mt-4 p-2"
                onClick={() => setMedResult(!medResultVisible)}
            >
                Добавить медициский результат
            </Button>
            {medResultVisible && <CreateMedResult onHide={() => setMedResult(false)} />}

            <Button
                variant="primary"
                className="mt-4 p-2"
                onClick={() => setService(!serviceVisible)}
            >
                Добавить услугу
            </Button>
            {serviceVisible && <CreateServiceForm onHide={() => setService(false)} />}
            {/*<Button
                variant="info"
                className="mt-4 p-2"
                onClick={() => setUpdService(someServiceId)}
            >
                Обновить услугу
            </Button>
            {updServiceVisible && <UpdServiceForm onHide={() => setService(false)} />*/}
            {/*<Button
                variant="danger"
                className="mt-4 p-2"
                 onClick={() => setDelService(someServiceId)}
            >
                 Удалить услугу
            </Button>
            {delServiceVisible && <CreateServiceForm onHide={() => setService(false)} />*/}
            {/*<Button
                variant="primary"
                className="mt-4 p-2"
                onClick={() => setService(!serviceVisible)}
            >
                Поиск медициской карты пациента
            </Button>
            {serviceVisible && <CreateServiceForm onHide={() => setService(false)} />}*/}


            {/*<div style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Group controlId="formDoctorId" className="mb-3" style={{ width: '20%' }}>
                <Form.Label>Введите ID врача:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите ID врача"
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" className="mt-4" style={{ width: '20%' }} onChange={handleConfirmId}>
                Подтвердить ID
            </Button>
            </div>
            <Schedule doctorId={doctorId} />*/}
        </Container>
    );
};

export default AdminPanel;