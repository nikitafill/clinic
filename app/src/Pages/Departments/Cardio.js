import React from "react";
import Department from "../../Components/Department";
import "../../Styles/Table.css";
import "../../Styles/Department.css";
function CardioDep() {

  return (
    <Department
      title="Кардиология"
      text={
        <p>
          <br />
          Согласно статистике, заболевания сердечно-сосудистой системы – одна из
          основных причин смертности. Поэтому, если вы почувствовали один из
          нижеперечисленных симптомов, важно в кратчайшие сроки записаться на
          прием к специалисту:
          <br />
          - Перебои в работе сердца
          <br />
          - Дискомфорт или сильные боли в груди
          <br />
          - Нехватка воздуха, одышка, удушье
          <br />
          - Резкое повышение или снижение артериального давления
          <br />
          - Учащенный или замедленный пульс
          <br />
          - Потери сознания
          <br />
          - Постоянная сонливость и слабость
          <br />
          - «Синюшные» губы.
          <br />
          <br />
          Врач кардиолог внимательно выслушает жалобы пациента, назначит
          необходимое обследование, чтобы оценить картину заболевания и подобрать
          подходящее лечение. Современное оборудование позволяет обнаружить недуг
          на ранней стадии, что повышает эффективность медикаментозной терапии –
          длительность лечения может существенно сократиться. Все медикаменты и
          процедуры подбираются в индивидуальном порядке, в соответствии с
          особенностями организма и самыми современными достижениями медицины.
        </p>
      }
      data={"Кардиология"}
    />
  );
}

export default CardioDep;
