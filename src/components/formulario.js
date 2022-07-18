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
  const [car, setCar] = useState(Auto);
  const [imgSVG, setImgSVG] = useState("");
  const { setColor } = useContext(DisignContext);

  useEffect(() => {
    const $body = document.getElementById("disign");
    disign.forEach((e) => {
      if (e.model === modelo) {
        $body.style.background = `linear-gradient(-10deg, ${e.fgColor} 50%, ${e.bgColor} 50%) no-repeat`;
        setColor(e.fgColor);
        setCar(e.src);
        setImgSVG(e.svg);
      }
    });
  }, [modelo, disign, setColor, setCar, setImgSVG]);

  return (
    <form id="form">
      <img src={imgSVG} alt="Auto Shadow" />
      <img src={car} alt="Auto Fiat" />

      <ChooseCar
        setEstados={setEstados}
        setModelo={setModelo}
        modelo={modelo}
        estados={estados}
      />

      <TitleSection title="Datos personales" />

      <DatosPersonales />

      <TitleSection
        title="cita"
        subtitle="Agenda el día para conducir un Fiat"
      />

      <WayToPay />

      <TitleSection
        title="Comentarios"
        subtitle="Queremos conocer tu opinión"
      />

      <InputTextArea />

      <SendForm />
    </form>
  );
};

export default Formulario;
