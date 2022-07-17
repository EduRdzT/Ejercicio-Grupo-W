import React from "react";
import FormPersonales from "./formPersonales";
import WhereToContact from "./whereToContact";

const DatosPersonales = () => {
  return (
    <>
      <div className="container-personales">
        <FormPersonales
          typeInput="text"
          labelFor="nombre"
          labelText="nombre (s)"
          placeholderInput="ej. Juan"
        />
        <FormPersonales
          typeInput="text"
          labelFor="apellidoPaterno"
          labelText="Apellido paterno"
          placeholderInput="ej. López"
        />
        <FormPersonales
          typeInput="text"
          labelFor="apellidoMaterno"
          labelText="Apellido materno"
          placeholderInput="ej.Trovar"
        />
        <FormPersonales
          typeInput="email"
          labelFor="email"
          labelText="email"
          placeholderInput="tu@email.com.mx"
        />
        <FormPersonales
          typeInput="tel"
          labelFor="telefono"
          labelText="teléfono"
          placeholderInput="(LADA) 000 00 00"
        />
      </div>
      <WhereToContact />
    </>
  );
};

export default DatosPersonales;
