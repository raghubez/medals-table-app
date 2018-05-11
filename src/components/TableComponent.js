import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const TableComponent = ({ props }) => (
  <table>
    <TableHeader sortDescending={props.sortDescending} />
    <tbody>
      {props.dataOrderArray.map(index => (
        <TableRow
          key={index}
          country={props.data[index]}
          handleChange={props.handleRowSelection}
        />
      ))}
    </tbody>
  </table>
);

export default TableComponent;
