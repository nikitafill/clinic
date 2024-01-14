import React from "react";
import Doctor from "../../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>О нас</span>
        </h3>
        <p className="about-description">
          Добро пожаловать в Health +, вашего надежного партнера по доступному и
          индивидуального медицинского обслуживания. Наши врачи-эксперты предлагают консультации
          и специализированные услуги, ставя во главу угла ваше благополучие. Присоединяйтесь к нам
          на пути к здоровому образу жизни.
        </p>

        <h4 className="about-text-title">Ваше решение</h4>

        <SolutionStep
          title="Выберите специалиста"
          description="Найдите своего идеального специалиста и легко записывайтесь на прием в Health Plus. Опытные врачи придают приоритет вашему здоровью, предлагая индивидуальный уход."
        />

        <SolutionStep
          title="Запланируйте встречу"
          description="Выберите дату и время, которые вам наилучшим образом подходят, и дайте нашей преданной команде медицинских специалистов обеспечить ваше благополучие с персонализированным уходом."
        />

        <SolutionStep
          title="Получите свои решения"
          description="Наши опытные врачи и специалисты готовы предоставить профессиональные советы и индивидуальные планы лечения, помогая вам достичь максимального здоровья."
        />
      </div>
    </div>
  );
}

export default About;
