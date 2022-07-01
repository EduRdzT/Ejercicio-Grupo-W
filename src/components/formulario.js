import React, { useRef, useState } from "react";
import Auto from "../assets/Fiat_500X_RED.png";
import { checkbox } from "../helpers/checkbox";
import FormPersonales from "./formPersonales";
import FormSelect from "./formSelect";
import DB from "../json/db.json";

const Formulario = () => {
  const [modelo, setModelo] = useState(["selecciona"]);
  const [estados, setEstados] = useState(["selecciona"]);
  let refContacto = useRef(),
    refTelefono = useRef(),
    refEmail = useRef(),
    refAmbos = useRef(),
    refPago = useRef(),
    refContado = useRef(),
    refCredito = useRef();

  const getModelo = (e) => {
    setModelo(e.target.value);
  };

  const getEstados = (e) => {
    setEstados(e.target.value);
  };

  return (
    <form id="form">
      <img src={Auto} alt="Auto Fiat" />
      <div className="container-select">
        <FormSelect seccion="modelo" options={DB.modelo} modelo={getModelo} />
        <FormSelect seccion="versión" options={DB.version[modelo]} />
        <FormSelect seccion="estado" options={DB.estados} modelo={getEstados} />
        <FormSelect seccion="distribuidor" options={DB.distribuidor[estados]} />
      </div>

      <h2>
        <span>Datos personales</span>
      </h2>
      <h5>Escribe tus datos personales</h5>
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
      <h6>Deseo ser contactado por</h6>
      <div className="container-checkbox" ref={refContacto}>
        <div
          className="checkbox"
          ref={refTelefono}
          onClick={() => checkbox(refTelefono, refContacto)}
        >
          <i className="fa-solid fa-phone"></i>
          <p>Teléfono</p>
        </div>
        <div ref={refEmail} onClick={() => checkbox(refEmail, refContacto)}>
          <i className="fa-solid fa-envelope"></i>
          <p>Email</p>
        </div>
        <div ref={refAmbos} onClick={() => checkbox(refAmbos, refContacto)}>
          Ambos
        </div>
      </div>

      <section id="section-pago">
        <h2>
          <span>Forma de pago</span>
        </h2>
        <h5>Personaliza tu cotización</h5>
        <h6>Elije tu tipo de pago</h6>
        <div className="container-pago" ref={refPago}>
          <div
            className="checkbox"
            ref={refContado}
            onClick={() => checkbox(refContado, refPago)}
          >
            Contado
          </div>
          <div ref={refCredito} onClick={() => checkbox(refCredito, refPago)}>
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
        <h2>
          <span>Comentarios</span>
        </h2>
        <h5>Nos importan tus comentarios</h5>
      </section>
      <div className="input-text">
        <label htmlFor="comentarios">¿Dudas? ¿Comentarios?</label>
        <textarea
          id="comentarios"
          cols="30"
          rows="12"
          placeholder="escríbenos"
        ></textarea>
      </div>
      <div className="send-form">
        <div>
          <label>
            <input type="checkbox" value="avisoPrivacidad" /> He leído y
            aceptado el<span>aviso de privacidad</span>
          </label>
          <label>
            <input type="checkbox" value="promociones" /> No deseo recibir
            promociones
          </label>
        </div>
        <input type="submit" value="ENVIAR" required />
      </div>
    </form>
  );
};

export default Formulario;
