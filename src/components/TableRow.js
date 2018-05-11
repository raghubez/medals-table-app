import React from "react";

const TableRow = ({ country, handleChange }) => (
  <tr>
    <td>
      <input type="checkbox" onClick={() => handleChange(country)} />&nbsp;
    </td>
    <td>
      <img
        src={`./img/${country.name.replace(/\s+/g, "").toLowerCase()}.png`}
        width={25}
      />
      {country.name}
    </td>
    <td>{country.medals.gold}</td>
    <td>{country.medals.silver}</td>
    <td>{country.medals.bronze}</td>
    <td>
      {country.medals.gold + country.medals.silver + country.medals.bronze}
    </td>
  </tr>
);

export default TableRow;
