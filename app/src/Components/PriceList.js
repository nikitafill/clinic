import React, { useState, useEffect } from "react";
import "../Styles/Price.css";
import "../Styles/Table.css";
import Table from "./Table";
/*import { analysesData } from "../Scripts/analysesList";
import { cardioData } from "../Scripts/cardioList";
import { urolData } from "../Scripts/urolList";
import { gynaecData } from "../Scripts/gynaecList";
import { endoData } from "../Scripts/endoList";
import { surgeryData } from "../Scripts/surgeryList";
import { orthData } from "../Scripts/orthList";
import { neuroData } from "../Scripts/neuroList";*/
import { getAllService } from "../Components/api/servicesAPI";

function PriceList() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    // Выполняем асинхронный вызов для получения данных о сервисах
    const fetchData = async () => {
      try {
        const data = await getAllService();
        setServiceData(data);
        console.log("Fetched service data:", data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="price-section" id="prices">
          <div className="price-title-content">
            <h3 className="price-title">Цены
            </h3>
            <p className="price-description">
            Медицинский центр Health + — оказывает услуги на платной основе.  
            Здесь вы получите квалифицированную помощь, а также консультации лучших специалистов по направлениям: 
            УЗИ, гинекология, урология, кардиология, эндокринология,  неврология, офтальмология.
            </p>
          </div>
          <div className="price-content">
          {/* Мапим данные о сервисах на компонент Table */}
          {serviceData.map((service) => (
            <Table key={service.id} title={service.specialization} data={service.data.map(item => ({ serviceName: item.Name, price: item.Cost }))} />
          ))}
          </div>
          {/*<div className="price-content">
            <Table
            title="Кардиология"
            data={cardioData}
            /> 
            <Table
            title="Неврология"
            data={neuroData}
            />
            <Table
            title="Ортопедия"
            data={orthData}
            />
            <Table
            title="Урология"
            data={urolData}
            />
            <Table
            title="Гинекология"
            data={gynaecData}
            />
            <Table
            title="Эндокринология"
            data={endoData}
            />
            {/*<Table
            title="Хирургия"
            data={surgeryData}
            />
            <Table
            title="Ультразвуковая диагностика"
            data={analysesData}
            />}
          </div>*/}
    </div>
  );
}

export default PriceList;