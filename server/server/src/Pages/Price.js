import React from "react";
import Navbar from "../Components/Navbar";
import PriceList from "../Components/PriceList";
import Footer from "../Components/Footer";

function Price() {
  return (
    <div className="price-section">
      <Navbar />
      <PriceList />
      <Footer />
    </div>
  );
}

export default Price;
