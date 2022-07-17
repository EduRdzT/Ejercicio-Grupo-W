import React, { useContext, useEffect, useRef } from "react";
import DisignContext from "../context/disignContext";
import { checkbox } from "../helpers/checkbox";

const WhereToContact = () => {
  let refContacto = useRef(),
    refTelefono = useRef(),
    refEmail = useRef(),
    refAmbos = useRef();
  const { checkboxStyle, color } = useContext(DisignContext);

  useEffect(() => {
    checkbox(refTelefono, refContacto, checkboxStyle);
  }, [checkboxStyle]);

  return (
    <>
      <h6>Deseo ser contactado por</h6>
      <div
        className="container-checkbox"
        ref={refContacto}
        style={{ border: `thin solid ${color}` }}
      >
        <div
          ref={refTelefono}
          onClick={() => checkbox(refTelefono, refContacto, checkboxStyle)}
        >
          <i className="fa-solid fa-phone"></i>
          <p>Teléfono</p>
        </div>

        <div
          ref={refEmail}
          onClick={() => checkbox(refEmail, refContacto, checkboxStyle)}
        >
          <i className="fa-solid fa-envelope"></i>
          <p>Email</p>
        </div>

        <div
          ref={refAmbos}
          onClick={() => checkbox(refAmbos, refContacto, checkboxStyle)}
        >
          Ambos
        </div>
      </div>
    </>
  );
};

export default WhereToContact;
