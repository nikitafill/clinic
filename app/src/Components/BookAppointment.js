import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Зачем выбирать наш центр</span>
        </h3>
        <p className="ba-description">
          Откройте для себя причины, по которым стоит выбрать Health Plus для своего медицинского обслуживания.
          Получите квалифицированную помощь, удобство и индивидуальные решения,
          Мы делаем ваше благополучие нашим главным приоритетом. Присоединяйтесь к нам на пути к
          к лучшему здоровью и более счастливой жизни.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Лучшие профессиональные врачи
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Предоставление результатов приема онлайн
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Легкая и быстрая запись на прием
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          Онлайн заявка
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
