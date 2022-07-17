import React, { useContext, useEffect, useState } from "react";
import Auto from "../assets/Fiat_500X_RED.png";
import ChooseCar from "./chooseCar";
import TitleSection from "./titleSection";
import DatosPersonales from "./datosPersonales";
import WayToPay from "./wayToPay";
import InputTextArea from "./inputTextArea";
import SendForm from "./sendForm";
import DisignContext from "../context/disignContext";

const Formulario = ({ disign }) => {
  const [modelo, setModelo] = useState(["selecciona"]);
  const [estados, setEstados] = useState(["selecciona"]);
  const { setColor } = useContext(DisignContext);

  useEffect(() => {
    const $body = document.getElementById("disign");
    disign.forEach((e) => {
      if (e.model === modelo) {
        $body.style.background = `linear-gradient(-10deg, ${e.fgColor} 50%, ${e.bgColor} 50%) no-repeat`;
        setColor(e.fgColor);
      }
    });
  }, [modelo, disign, setColor]);

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
