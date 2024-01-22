import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import { createAppointment } from "./api/appointmentApi";
import { getAllDepartments } from "./api/departmentApi";
import { getAllDoctors } from "./api/doctorApi";
import { getAllService } from "./api/servicesAPI";

/*import { getDoctorsByDepartmentName} from "./api/doctorApi";
import { getServicesByDepartmentName } from "./api/servicesAPI";*/


function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [departmentName, setDepartmentName] = useState("default");
  const [doctorName, setDoctorName] = useState("default");
  const [serviceName, setServiceName] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]); 
  
  {/*useEffect(() => {
    // Загрузка данных с сервера
    getAllDepartments()
      .then((data) => setDepartments(data))
      .catch((error) => console.error("Failed to get departments:", error));

  }, []);*/}
  useEffect(() => {
    getAllDoctors()
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Failed to get departments:", error));
    // Загрузка данных с сервера
    getAllDepartments()
      .then((data) => setDepartments(data))
      .catch((error) => console.error("Failed to get departments:", error));
    getAllService()
      .then((data) => setServices(data))
      .catch((error) => console.error("Failed to get departments:", error));
  }, []);


  //Обработка текстового http запроса та ешё задача
  {/*const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartmentName(selectedDepartment);
    setDoctorName("default");
    setServiceName("default");
  
    getDoctorsByDepartmentName(selectedDepartment)
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Failed to get doctors:", error));
  
      getServicesByDepartmentName(selectedDepartment)
      .then((data) => setServices(data))
      .catch((error) => console.error("Failed to get services:", error));
  };*/}

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Валидация ввода формы
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Требуется указать имя пациента";
    } /*else if (patientName.trim().length < 8) {
      errors.patientName = "Имя пациента должно содержать не менее 8 символов";
    }*/

    if (!patientNumber.trim()) {
      errors.patientNumber = "Требуется указать номер телефона пациента";
    } /*else if (patientNumber.trim().length < 6) {
      errors.patientName = "Номер пациента должен содержать не менее 6 символов";
    }*/

    if (patientGender === "default") {
      errors.patientGender = "Пожалуйста, выберите пол пациента";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Требуется указать время приема";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Пожалуйста, выберите время приема в будущем";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    const appointmentData = {
      fullName: patientName,
      phoneNumber: patientNumber,
      gender: patientGender,
      date: appointmentTime,
      departmentName,
      doctorName,
      serviceName,
    };
    try {
      const response = await createAppointment(appointmentData);

      // Обработка успешной отправки
      // ... ваш код обработки ...

      toast.success("Запись на прием успешно создана!", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsSubmitted(true),
        onClose: () => setIsSubmitted(false),
      });
    } catch (error) {
      // Обработка ошибок
      console.error("Failed to create appointment:", error);
      toast.error("Не удалось создать запись на прием", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    // Сброс полей формы и ошибок после успешной отправки
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setFormErrors({});
  };

  return (
    <div className="appointment-form-section">
      <div className="form-container">
        <h2 className="form-title">
          <span>Запись на прием онлайн</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Полное Имя Пациента:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Номер Телефона Пациента:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Пол Пациента:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Выберите</option>
              <option value="Мужской">Мужской</option>
              <option value="Женский">Женский</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />
          <label>
            Предпочтительное Время Приема:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />

          <label>
            Отделение:
            <select
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              required
            >
              <option value="default">Выберите</option>
              {departments.map((department) => (
                <option key={department.Id} value={department.Name}>
                  {department.Name}
                </option>
              ))}
            </select>
            {formErrors.departmentName && <p className="error-message">{formErrors.departmentName}</p>}
          </label>

          <br />

          <label>
            Услуга:
            <select
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              required
            >
              <option value="default">Выберите</option>
              {services.map((service) => (
                <option key={service.Id} value={service.serviceName}>
                  {service.serviceName}
                </option>
              ))}
            </select>
            {formErrors.serviceName && <p className="error-message">{formErrors.serviceName}</p>}
          </label>
          <br />
          <label>
            Врач:
            <select
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
            >
             <option value="default">Выберите</option>
             {doctors.map((doctor) => (
                <option key={doctor.Id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
            {formErrors.doctorName && <p className="error-message">{formErrors.doctorName}</p>}
            </label>

          <br />
          <button type="submit" className="text-appointment-btn">
                Подтвердить Запись
          </button>

          {/*<p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Детали записи отправлены на телефон пациента по SMS.</p>*/}
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
