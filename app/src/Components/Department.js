import React from "react";
import Table from "./Table";

function Department(props) {
  return (
    <div>
        <p className="departmetn-title">{props.title}</p>
        <p className="depatment-text">{props.text}</p>
        <Table data={props.data}/>
    </div>
  );
}

export default Department;