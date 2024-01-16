import React, {useState} from 'react';
import {Container} from "react-bootstrap";

const Profile = () => {
    const [doctorVisible, setDoctor] = useState(false)
    const [medResultVisible, setMedResult] = useState(false)
    const [serviceVisible, setService] = useState(false)

    return (

        <Container className="d-flex flex-column" style={{ marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontWeight: 'bold', marginBottom: '64px', textAlign: 'center' }}>Медицинские результаты</h2>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontWeight: 'bold', marginBottom: '64px', textAlign: 'center' }}>Записи</h2>
        </Container>
    );
};

export default Profile;