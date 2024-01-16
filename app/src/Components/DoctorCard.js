import React from "react";

function DoctorCard(props) {
  return (
    <div className="dt-card">
      <img src={props.img}  className="dt-card-img" />
      {/*props.data.map((item, index) => (
        <div key={index}>
          <p className="dt-card-name">{item.name}</p>
          <p className="dt-card-title">{item.specialization}</p>
          <p className="dt-card-stars">Опыт работы {item.workExp} лет</p>
      </div>
      ))*/}
      <p className="dt-card-name">{props.name}</p>
      <p className="dt-card-title">{props.title}</p>
      <p className="dt-card-stars">Опыт работы {props.workExp} лет</p>
    </div>
  );
}

export default DoctorCard;
