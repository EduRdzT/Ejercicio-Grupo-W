import React, { useRef } from "react";

const SendForm = () => {
  let refPrivacidad = useRef(),
    refPromociones = useRef();

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
      <input type="submit" value="ENVIAR" onClick={(e) => e.preventDefault()} />
    </div>
  );
};

export default SendForm;
