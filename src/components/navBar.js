import React from "react";
import FiatLogo from "../assets/Fiat_Logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={FiatLogo} alt="Logo Fiat" />
      </div>
      <ul>
        <li>Modelos</li>
        <li>Prueba de manejo</li>
        <li>Cotizar</li>
        <li>Promociones</li>
        <li>Distribuidores</li>
      </ul>
      <div className="menu-btn">
        <div className="menu-btn-burger"></div>
      </div>
    </nav>
  );
}

export default NavBar;
