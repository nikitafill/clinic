import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация ввода формы
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Требуется указать имя пациента";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Имя пациента должно содержать не менее 8 символов";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Требуется указать номер телефона пациента";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Номер телефона пациента должен содержать 10 цифр";
    }

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

    // Сброс полей формы и ошибок после успешной отправки
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setFormErrors({});

    toast.success("Запись на прием успешно создана!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <div className="form-container">
        <h2 className="form-title">
          <span>Запись на Прием Онлайн</span>
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
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
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

          <br />
          <button type="submit" className="text-appointment-btn">
            Подтвердить Запись
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Детали записи отправлены на телефон пациента по SMS.</p>
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
