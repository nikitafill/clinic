import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Reviews from "../Components/Reviews";

function ReviewsPage() {
  return (
    <div className="doctor-section">
      <Navbar />
      <Reviews />
      <Footer />
    </div>
  );
}

export default ReviewsPage;
