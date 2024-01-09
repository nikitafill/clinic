import React from "react";
import {Table} from 'react-bootstrap';

function BasicTable(props) {
  return (
    <div>
      <p className="table-title">{props.title}</p>
      <Table  bordered className="table">
      <thead>
        <tr>
          <th className="name-column">Наименование услуг</th>
          <th className="price-column">Цена</th>
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
    </Table>
    </div>
  );
}

export default BasicTable;