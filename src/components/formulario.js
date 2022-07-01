import React, { useState } from "react";
import Auto from "../assets/Fiat_500X_RED.png";
import ChooseCar from "./chooseCar";
import TitleSection from "./titleSection";
import DatosPersonales from "./datosPersonales";
import WayToPay from "./wayToPay";
import InputTextArea from "./inputTextArea";
import SendForm from "./sendForm";

const Formulario = () => {
  const [modelo, setModelo] = useState(["selecciona"]);
  const [estados, setEstados] = useState(["selecciona"]);

  return (
    <form id="form">
      <img src={Auto} alt="Auto Fiat" />

      <ChooseCar
        setEstados={setEstados}
        setModelo={setModelo}
        modelo={modelo}
        estados={estados}
      />

      <TitleSection
        title="Datos personales"
        subtitle="Escribe tus datos personales"
      />

      <DatosPersonales />

      <WayToPay />

      <InputTextArea />

      <SendForm />
    </form>
  );
};

export default Formulario;
