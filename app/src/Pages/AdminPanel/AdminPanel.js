import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateDoctor from "../../Components/forms/CreateDoctor";
import CreateMedResult from "../../Components/forms/CreateMedResult";
import CreateService from "../../Components/forms/CreateService";

const AdminPanel = () => {
    const [doctorVisible, setDoctor] = useState(false)
    const [medResultVisible, setMedResult] = useState(false)
    const [serviceVisible, setService] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                //onClick={() => setDoctor(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                //onClick={() => setMedResult(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                //onClick={() => setService(true)}
            >
                Добавить устройство
            </Button>
            {/*<CreateDoctor show={doctorVisible} onHide={() => setDoctor(false)}/>
            <CreateMedResult show={medResultVisible} onHide={() => setMedResult(false)}/>
            <CreateService show={serviceVisible} onHide={() => setService(false)}/>*/}
        </Container>
    );
};

export default AdminPanel;