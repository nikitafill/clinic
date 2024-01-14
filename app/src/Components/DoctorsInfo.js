import React , { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";
import {getAllDoctors} from "../Components/api/doctorApi"


function DoctorsInfo(){
  const [doctorData, setDoctorData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDoctors();
        console.log("Fetched doctor data:", data);
        setDoctorData(data);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchData();
  }, []);

  if (!dataLoaded) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Наши врачи</span>
        </h3>

        <p className="dt-description">
          Познакомьтесь с нашей исключительной командой врачей-специалистов, 
          посвятивших себя предоставлять первоклассные медицинские услуги в Health Plus. 
          Доверьтесь ихзнаниям и опыту, которые приведут вас к более здоровой и счастливой жизни.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Елена Иванова"
          title="Гинеколог"
          workExp="10"
        />
        {/*{doctorData.map((data, index) => (
        <DoctorCard key={index} img={profile1} data={data} />
        ))}
        <DoctorCard
           key={index} img={profile1} data = {doctorData}
        />
        <DoctorCard
          key={index} img={profile1} data = {doctorData} 
        />
        <DoctorCard key={index} img={profile1} data = {doctorData}
        />*/}
        <DoctorCard
          img={profile2}
          name="Алексей Петров"
          title="Кардиолог"
          workExp="7"
        />
        {/*<DoctorCard
          img={profile3}
          name="Dr. Jenny Wilson"
          title="Endocrinologists"
          workExp="4"
      />*/}
        <DoctorCard
          img={profile4}
          name="Иван Сидоров"
          title="Уролог"
          workExp="3"
        />
      </div>
    </div>
  );
}

export default DoctorsInfo;
