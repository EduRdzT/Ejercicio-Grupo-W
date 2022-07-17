import React, { useContext, useEffect, useRef } from "react";
import DisignContext from "../context/disignContext";
import { checkbox } from "../helpers/checkbox";

const WhereToContact = () => {
  let refContacto = useRef(),
    refTelefono = useRef(),
    refEmail = useRef();
  const { checkboxStyle, color } = useContext(DisignContext);

  useEffect(() => {
    checkbox(refTelefono, refContacto, checkboxStyle);
  }, [checkboxStyle]);

  return (
    <>
      <div className="container-checkbox" ref={refContacto}>
        <div
          ref={refTelefono}
          style={{ border: `thin solid ${color}` }}
          onClick={() => checkbox(refTelefono, refContacto, checkboxStyle)}
        >
          <p>Fijo</p>
        </div>

        <div
          ref={refEmail}
          style={{ border: `thin solid ${color}` }}
          onClick={() => checkbox(refEmail, refContacto, checkboxStyle)}
        >
          <p>Móvil</p>
        </div>
      </div>
    </>
  );
};

export default WhereToContact;
