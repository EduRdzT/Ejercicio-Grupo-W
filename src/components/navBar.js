import React, { useRef } from "react";
import FiatLogo from "../assets/Fiat_Logo.png";

function NavBar() {
  let refMenu = useRef(),
    refOpen = useRef(),
    open = useRef(false),
    breakpoint = matchMedia(`(min-width: 710px)`);

  const responsiveMedia = (e) => {
    if (!e.matches) {
      if (open.current) {
        open.current = false;
        refMenu.current.classList.remove("close");
        refOpen.current.classList.remove("open");
      } else {
        open.current = true;
        refMenu.current.classList.add("close");
        refOpen.current.classList.add("open");
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={FiatLogo} alt="Logo Fiat" />
      </div>
      <ul ref={refMenu}>
        <li>Modelos</li>
        <li>Prueba de manejo</li>
        <li>Cotizar</li>
        <li>Promociones</li>
        <li>Distribuidores</li>
      </ul>
      <div
        className="menu-btn"
        ref={refOpen}
        onClick={() => responsiveMedia(breakpoint)}
      >
        <div className="menu-btn-burger"></div>
      </div>
    </nav>
  );
}

export default NavBar;
