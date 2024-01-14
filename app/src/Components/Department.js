import React, { useState, useEffect }from "react";
import Table from "./Table";
import { getAllService } from "../Components/api/servicesAPI";
import "../Styles/Table.css";

function Department(props) {
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
    <div className="department-section">
      <div className="department-title-content">
        <h3 className="department-title">{props.title}</h3>
        <p className="department-text">{props.text}</p>
      </div>
      <div className="department-content">
      <Table title = {"Цены"} data={filterServicesBySpecialization(props.data)}/>
      </div>
    </div>
  );
}

export default Department;