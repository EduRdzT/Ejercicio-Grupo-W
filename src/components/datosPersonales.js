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
          placeholderInput="Escribe tu nombre"
        />
        <FormPersonales
          typeInput="text"
          labelFor="apellidoPaterno"
          labelText="Apellido paterno"
          placeholderInput="Escribe tu apellido"
        />
        <FormPersonales
          typeInput="text"
          labelFor="apellidoMaterno"
          labelText="Apellido materno"
          placeholderInput="Escribe tu apellido"
        />
        <FormPersonales
          typeInput="email"
          labelFor="email"
          labelText="email"
          placeholderInput="correo@email.com.mx"
        />
        <FormPersonales
          typeInput="tel"
          labelFor="telefono"
          labelText="teléfono"
          placeholderInput="01.844.439.0654"
        />
      </div>
      <WhereToContact />
    </>
  );
};

export default DatosPersonales;
