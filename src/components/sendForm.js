import React, { useContext, useRef } from "react";
import DisignContext from "../context/disignContext";

const SendForm = () => {
  let refPrivacidad = useRef(),
    refPromociones = useRef();
  const { color } = useContext(DisignContext);
  const submitStyle = {
    border: `thin solid ${color}`,
    color: color,
  };

  const clickCheckbox = (ref) => {
    if (ref.current.matches(".fa-check")) {
      ref.current.classList.remove("fa-check");
    } else {
      ref.current.classList.add("fa-check");
    }
  };

  return (
    <div className="send-form">
      <div>
        <div
          className="container-tidy-checkbox"
          onClick={() => clickCheckbox(refPrivacidad)}
        >
          <div className="tidy-checkbox">
            <i ref={refPrivacidad} className="fa-solid fa-check"></i>
          </div>
          <p>
            He leído y aceptado el<span>aviso de privacidad</span>
          </p>
        </div>
        <div
          className="container-tidy-checkbox"
          onClick={() => clickCheckbox(refPromociones)}
        >
          <div className="tidy-checkbox">
            <i ref={refPromociones} className="fa-solid"></i>
          </div>
          <p>No deseo recibir promociones</p>
        </div>
      </div>
      <input
        style={submitStyle}
        type="submit"
        value="ENVIAR"
        onClick={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default SendForm;
