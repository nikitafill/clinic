import React from "react";
import InformationCard_2 from "./InformationCard_2";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Service.css";
import endo from "../Assets/endo.png";
import surgery from "../Assets/surgery.png";
import analyses from "../Assets/analyses.png";
import urol from "../Assets/urol.png";
import cardio from "../Assets/cardio.png";
import gynaec from "../Assets/gynaec.png";
import neuro from "../Assets/neuro.png";
import orth from "../Assets/orth.png";

function ServiceInfo() {
  return (
    <div className="service-section" id="services">
      <div className="service-title-content">
        <h3 className="service-title">Услуги
        </h3>
        <p className="service-description">
        Медицинский центр «ГЕНЕЗ» — оказывает услуги на платной основе в Могилеве.  
        Здесь вы получите квалифицированную помощь, а также консультации лучших специалистов по направлениям: 
        УЗИ, гинекология, урология, кардиология, эндокринология, психотерапия, функциональная диагностика, неврология, 
        офтальмология, хирургия и педиатрия.
        </p>
      </div>

      <div className="info-cards-content">
        <div className="row">

          <InformationCard_2
            img={cardio}
            title="Кардиология"
          />
          
          <InformationCard_2
            img={neuro} 
            title="Неврология"
          />

          <InformationCard_2
            img={orth}
            title="Ортопедия"
          />
        </div>

        <div className="row">
          <InformationCard_2
            img={urol}
            title="Урология"
          />

          <InformationCard_2
            img={gynaec}
            title="Гинекология"
          />
          <InformationCard_2
            img={endo}
            title="Эндокринология"
          />
        </div>
        <div className="row">
          <InformationCard_2
            img={surgery}
            title="Хирургия"
          />
          <InformationCard_2
            img={analyses}
            title="Диагностика"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceInfo;