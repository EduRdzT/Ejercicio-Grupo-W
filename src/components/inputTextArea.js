import React from "react";

const InputTextArea = () => {
  return (
    <div className="input-text">
      <label htmlFor="comentarios">¿Dudas? ¿Comentarios?</label>
      <textarea
        id="comentarios"
        cols="30"
        rows="12"
        placeholder="escríbenos"
      ></textarea>
    </div>
  );
};

export default InputTextArea;
