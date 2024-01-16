import React, { useState, useEffect } from "react";
import "../Styles/Price.css";
import "../Styles/Table.css";
import BasicTable  from "./Table";
import { getAllService } from "../Components/api/servicesAPI";

function PriceList() {
  const [serviceData, setServiceData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllService();
        console.log("Fetched service data:", data);
        setServiceData(data);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchData();
  }, []);

  if (!dataLoaded) {
    return <p>Loading...</p>;
  }
  const filterServicesBySpecialization = (specialization) => {
    return serviceData.filter((service) => service.specialization === specialization);
  };
  return (
    <div className="price-section" id="prices">
      <div className="price-title-content">
        <h3 className="price-title">Цены</h3>
        <p className="price-description">
          Медицинский центр Health + — оказывает услуги на платной основе. Здесь
          вы получите квалифицированную помощь, а также консультации лучших
          специалистов по направлениям: УЗИ, гинекология, урология, кардиология,
          эндокринология, неврология, офтальмология.
        </p>
      </div>
      <div className="price-content">
        <BasicTable title="Кардиология" data={filterServicesBySpecialization("Кардиология")} />
        <BasicTable title="Неврология" data={filterServicesBySpecialization("Неврология")} />
        <BasicTable title="Ортопедия" data={filterServicesBySpecialization("Ортопедия")} />
        <BasicTable title="Урология" data={filterServicesBySpecialization("Урология")} />
        <BasicTable title="Гинекология" data={filterServicesBySpecialization("Гинекология")} />
        <BasicTable title="Эндокринология" data={filterServicesBySpecialization("Эндокринология")} />
        {/*<BasicTable  title="Все услуги" data={serviceData} />*/}
      </div>
    </div>
  );
}

export default PriceList;