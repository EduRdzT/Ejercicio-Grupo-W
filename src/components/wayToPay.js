import React, { useContext, useEffect, useRef } from "react";
import { checkbox } from "../helpers/checkbox";
import DisignContext from "../context/disignContext";
import FormPersonales from "./formPersonales";

const WayToPay = () => {
  let refPago = useRef(),
    refContado = useRef(),
    refCredito = useRef(),
    refTarde = useRef();
  const { checkboxStyle, color } = useContext(DisignContext);

  useEffect(() => {
    checkbox(refContado, refPago, checkboxStyle);
  }, [checkboxStyle]);

  return (
    <section id="section-pago">
      <FormPersonales
        typeInput="text"
        labelFor="fecha"
        labelText="fecha"
        placeholderInput="MM  /  DD  /  AAAA"
      />
      <div className="container-pago" ref={refPago}>
        <h6>horario</h6>
        <div
          ref={refContado}
          style={{ border: `thin solid ${color}` }}
          onClick={() => checkbox(refContado, refPago, checkboxStyle)}
        >
          Mañana
        </div>
        <div
          ref={refCredito}
          style={{ border: `thin solid ${color}` }}
          onClick={() => checkbox(refCredito, refPago, checkboxStyle)}
        >
          Medio Día
        </div>
        <div
          style={{ border: `thin solid ${color}` }}
          ref={refTarde}
          onClick={() => checkbox(refTarde, refPago, checkboxStyle)}
        >
          Tarde
        </div>
      </div>
    </section>
  );
};

export default WayToPay;
