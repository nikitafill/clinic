import React from "react";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/DoctorsHomePage";

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
