import React from "react";
import Navbar from "../Components/Navbar";
import DoctorsInfo from "../Components/DoctorsInfo.js";
import Footer from "../Components/Footer";

function Doctors() {
  return (
    <div className="doctor-section">
      <Navbar />
      <DoctorsInfo />
      <Footer />
    </div>
  );
}

export default Doctors;
