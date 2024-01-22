import React from "react";
import { Link } from "react-router-dom";
import InformationCard_2 from "./InformationCard_2";
import "../Styles/Service.css";
import endo from "../Assets/endo.png";
import urol from "../Assets/urol.png";
import cardio from "../Assets/cardio.png";
import gynaec from "../Assets/gynaec.png";
import neuro from "../Assets/neuro.png";
import orth from "../Assets/orth.png";

function ServiceInfo() {
  return (
    <div className="service-section" id="services">
      <div className="service-title-content">
        <h3 className="service-title">Услуги</h3>
        <p className="service-description">
          Медицинский центр Health+ — оказывает услуги на платной основе .
          Здесь вы получите квалифицированную помощь, а также консультации лучших
          специалистов по направлениям: УЗИ, гинекология, урология, кардиология,
          эндокринология, психотерапия, функциональная диагностика, неврология,
          офтальмология, хирургия и педиатрия.
        </p>
      </div>

      <div className="info-cards-content">
        <div className="row">
          <Link to="/services/cardio">
            <InformationCard_2 img={cardio} title="Кардиология" />
          </Link>

          <Link to="/services/neuro">
            <InformationCard_2 img={neuro} title="Неврология" />
          </Link>
        </div>

        <div className="row">
          <Link to="/services/urol">
            <InformationCard_2 img={urol} title="Урология" />
          </Link>

          <Link to="/services/gynaec">
            <InformationCard_2 img={gynaec} title="Гинекология" />
          </Link>
        </div>
        <div className="row">
          <Link to="/services/orth">
            <InformationCard_2 img={orth} title="Ортопедия" />
          </Link>
          <Link to="/services/endo">
            <InformationCard_2 img={endo} title="Эндокринология" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfo;
