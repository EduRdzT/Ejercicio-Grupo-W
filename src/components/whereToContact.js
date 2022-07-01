import React, { useRef } from "react";
import { checkbox } from "../helpers/checkbox";

const WhereToContact = () => {
  let refContacto = useRef(),
    refTelefono = useRef(),
    refEmail = useRef(),
    refAmbos = useRef();

  return (
    <>
      <h6>Deseo ser contactado por</h6>
      <div className="container-checkbox" ref={refContacto}>
        <div
          className="checkbox"
          ref={refTelefono}
          onClick={() => checkbox(refTelefono, refContacto)}
        >
          <i className="fa-solid fa-phone"></i>
          <p>Teléfono</p>
        </div>

        <div ref={refEmail} onClick={() => checkbox(refEmail, refContacto)}>
          <i className="fa-solid fa-envelope"></i>
          <p>Email</p>
        </div>

        <div ref={refAmbos} onClick={() => checkbox(refAmbos, refContacto)}>
          Ambos
        </div>
      </div>
    </>
  );
};

export default WhereToContact;
