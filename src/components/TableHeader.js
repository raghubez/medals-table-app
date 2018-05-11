import React from "react";

const TableHeader = ({ sortDescending }) => (
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Country</th>
      <th>
        <button onClick={() => sortDescending("gold")}> Gold </button>
      </th>
      <th>
        <button onClick={() => sortDescending("silver")}> Silver </button>
      </th>
      <th>
        <button onClick={() => sortDescending("bronze")}> Bronze </button>
      </th>
      <th>Total</th>
    </tr>
  </thead>
);

export default TableHeader;
