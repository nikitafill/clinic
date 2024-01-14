import React from "react";
import Department from "../../Components/Department";
import "../../Styles/Table.css";
import "../../Styles/Department.css";
function NeuroDep() {

  return (
    <Department
      title="Неврология"
      text={
        <p>
          <br />
          Все симптомы и состояния, имеющие отношение к функции головного или спинного мозга, находятся в ведении невролога, который занимается диагностикой и лечением заболеваний, связанных с этими органами.
          <br />
          Если вас беспокоят головные боли, слабость, нарушение органов чувств, боли в спине или снижение чувствительности, то это повод обратиться к врачу.
        </p>
      }
      data={"Неврология"}
    />
  );
}

export default NeuroDep;
