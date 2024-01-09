import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routers/AppRouter";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
/*import Home from "./Pages/Home";
import Services from "./Pages/Service";
import Prices from "./Pages/Price";
import Doctors from "./Pages/Doctors";
import Appointment from "./Pages/Appointment"*/

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      <Footer />
    </BrowserRouter>
);
};

export default App;

/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Service from "./Pages/Service";
import Price from "./Pages/Price";
import Doctors from "./Pages/Doctors";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/service" element={<Service />} />
          <Route path="/price" element={<Price />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;*/
