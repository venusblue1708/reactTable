import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar">
      <img
        className="navbar_logo"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
        alt="error"
      />
      <ul className="navbar__list">
        <li className="list__title">
          <a href="#">Home</a>
        </li>
        <li className="list__title">
          <a href="#">About us</a>
        </li>
        <li className="list__title">
          <a href="#">Status</a>
        </li>
        <li className="list__title">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
