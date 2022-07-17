import React, { useContext } from "react";
import DisignContext from "../context/disignContext";

const InputTextArea = () => {
  const { color } = useContext(DisignContext);
  return (
    <div className="input-text">
      <label htmlFor="comentarios">¿Dudas? ¿Comentarios?</label>
      <textarea
        id="comentarios"
        cols="30"
        rows="12"
        placeholder="escríbenos"
        style={{ border: `1px solid ${color}` }}
      ></textarea>
    </div>
  );
};

export default InputTextArea;
