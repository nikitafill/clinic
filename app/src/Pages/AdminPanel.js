import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateDoctor from "../Components/forms/CreateDoctor";
import CreateMedResult from "../Components/forms/CreateMedResult";
import CreateServiceForm from "../Components/forms/CreateServiceForm";

const AdminPanel = () => {
    const [doctorVisible, setDoctor] = useState(false)
    const [medResultVisible, setMedResult] = useState(false)
    const [serviceVisible, setService] = useState(false)

    return (

        <Container className="d-flex flex-column" style={{ marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontWeight: 'bold', marginBottom: '64px', textAlign: 'center' }}>Медицинские результаты</h2>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontWeight: 'bold', marginBottom: '64px', textAlign: 'center' }}>Записи</h2>
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

            <Button
                variant="primary"
                className="mt-4 p-2"
                onClick={() => setService(!serviceVisible)}
            >
                Поиск медициской карты пациента
            </Button>
            {serviceVisible && <CreateServiceForm onHide={() => setService(false)} />}
        </Container>
    );
};

export default AdminPanel;