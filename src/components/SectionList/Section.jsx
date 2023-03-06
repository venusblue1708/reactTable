import React from "react";
import "./Section.css";
const Section = (props) => {
  return (
    <div className="section">
      <h2>Section List component</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Age</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
