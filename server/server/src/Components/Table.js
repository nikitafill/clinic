import React from "react";

function Table(props) {
  if (!props.data || !Array.isArray(props.data)) {
    return (
      <div className="table-container">
        <p className="table-title">{props.title}</p>
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <p className="table-title">{props.title}</p>
      <table>
        <thead>
          <tr>
            <th className="wider-column">Наименование услуг</th>
            <th className="slim-column">Цена</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>{item.serviceName}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
