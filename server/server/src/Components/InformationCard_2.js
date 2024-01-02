import React from "react";

function InformationCard_2(props) {
  return (
    <div className="info-cards">
      <img src={props.img} alt={props.name} className="serv-card-img" />
      <p className="serv-card-title">{props.title}</p>
    </div>
  );
}

export default InformationCard_2;
