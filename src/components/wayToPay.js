import React, { useRef } from "react";
import FormPersonales from "./formPersonales";
import FormSelect from "./formSelect";
import DB from "../json/db.json";
import { checkbox } from "../helpers/checkbox";
import TitleSection from "./titleSection";

const WayToPay = () => {
  let refPago = useRef(),
    refContado = useRef(),
    refCredito = useRef();

  return (
    <section id="section-pago">
      <TitleSection
        title="Forma de pago"
        subtitle="Personaliza tu cotización"
      />
      <h6>Elije tu tipo de pago</h6>
      <div className="container-pago" ref={refPago}>
        <div ref={refContado} onClick={() => checkbox(refContado, refPago)}>
          Contado
        </div>
        <div
          className="checkbox"
          ref={refCredito}
          onClick={() => checkbox(refCredito, refPago)}
        >
          Crédito
        </div>
      </div>
      <div className="form-pago">
        <FormPersonales
          typeInput="text"
          labelFor="enganche"
          labelText="Cantidad de enganche"
          placeholderInput="80, 000.00"
        />
        <FormSelect seccion="plazo" options={DB.plazos} />
      </div>
      <TitleSection
        title="Comentarios"
        subtitle="Nos importan tus comentarios"
      />
    </section>
  );
};

export default WayToPay;
