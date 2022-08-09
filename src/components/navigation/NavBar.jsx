import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <button className="service-button" type="button" onClick={() => navigate("/")}>
        Services
      </button>
    </div>
  );
};

export default NavBar;
