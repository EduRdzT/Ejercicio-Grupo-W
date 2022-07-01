import React from "react";
import FormSelect from "./formSelect";
import DB from "../json/db.json";

const ChooseCar = ({ setEstados, setModelo, modelo, estados }) => {
  const getModelo = (e) => {
    setModelo(e.target.value);
  };

  const getEstados = (e) => {
    setEstados(e.target.value);
  };

  return (
    <div className="container-select">
      <FormSelect seccion="modelo" options={DB.modelo} modelo={getModelo} />
      <FormSelect seccion="versión" options={DB.version[modelo]} />
      <FormSelect seccion="estado" options={DB.estados} modelo={getEstados} />
      <FormSelect seccion="distribuidor" options={DB.distribuidor[estados]} />
    </div>
  );
};

export default ChooseCar;
