import React from "react";
import Hero from "../Components/HomePageComp/Hero";
import Info from "../Components/HomePageComp/Info";
import About from "../Components/HomePageComp/About";
import BookAppointment from "../Components/HomePageComp/BookAppointment";
import Doctors from "../Components/HomePageComp/DoctorsHomePage";

function Home() {
  return (
    <div className="home-section">
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Doctors />
    </div>
  );
}

export default Home;
