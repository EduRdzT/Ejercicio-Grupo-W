import React, { useContext, useEffect, useRef, useState } from "react";
import Auto from "../assets/Fiat_500X_RED.png";
import ChooseCar from "./chooseCar";
import TitleSection from "./titleSection";
import DatosPersonales from "./datosPersonales";
import WayToPay from "./wayToPay";
import InputTextArea from "./inputTextArea";
import SendForm from "./sendForm";
import DisignContext from "../context/disignContext";
import { ReactComponent as MobiSVG } from "../assets/fiat-mobi.svg";
import { ReactComponent as DucatoSVG } from "../assets/fiat-ducato.svg";
import { ReactComponent as ArgoSVG } from "../assets/fiat-argo.svg";

const Formulario = ({ disign }) => {
  const [modelo, setModelo] = useState(["selecciona"]);
  const [estados, setEstados] = useState(["selecciona"]);
  const { color, setColor } = useContext(DisignContext);
  let refCar = useRef(Auto);

  useEffect(() => {
    const $body = document.getElementById("disign");
    disign.forEach((e) => {
      if (e.model === modelo) {
        $body.style.background = `linear-gradient(-10deg, ${e.fgColor} 50%, ${e.bgColor} 50%) no-repeat`;
        setColor(e.fgColor);
        refCar.current = e.src;
        return;
      }
    });
  }, [modelo, disign, setColor]);

  return (
    <form id="form">
      {modelo === "Mobi" ? (
        <MobiSVG fill={color} />
      ) : modelo === "Argo" ? (
        <ArgoSVG fill={color} />
      ) : modelo === "Ducato Cargo Van" ? (
        <DucatoSVG fill={color} />
      ) : (
        <></>
      )}
      <img src={refCar.current} alt="Auto Fiat" />

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
