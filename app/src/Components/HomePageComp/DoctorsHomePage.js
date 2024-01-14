import React from "react";
import DoctorCard from "../DoctorCard";
import profile1 from "../../Assets/profile-1.png";
import profile2 from "../../Assets/profile-2.png";
import profile3 from "../../Assets/profile-3.png";
import profile4 from "../../Assets/profile-4.png";
import "../../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Наши доктора</span>
        </h3>

        <p className="dt-description">
          Познакомьтесь с нашей исключительной командой врачей-специалистов, посвятивших себя
          предоставлять первоклассные медицинские услуги в Health Plus. Доверьтесь их
          знаниям и опыту, которые приведут вас к более здоровой и счастливой
          жизни.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Kathryn Murphy"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Jacob Jones"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Jenny Wilson"
          title="Endocrinologists"
          stars="4.7"
          reviews="450"
        />
      </div>
    </div>
  );
}

export default Doctors;
