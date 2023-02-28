import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar-container">
      <div className="Navbar-logo">
        <img
          src="https://tekup.vn/wp-content/uploads/2022/08/logo-tekup-02.png"
          alt=""
        />
      </div>
      <div className="Navbar-menu">
        <ul>
          <li>HOME</li>
        </ul>
        <ul>
          <li>MENU </li>
        </ul>
        <ul>
          <li>SHALE </li>
        </ul>
        <ul>
          <li>POLICY </li>
        </ul>
        <ul>
          <li>BLOG </li>
        </ul>
        <ul>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
