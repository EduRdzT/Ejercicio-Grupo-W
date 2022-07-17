import React, { useContext } from "react";
import DisignContext from "../context/disignContext";

const FormPersonales = ({
  typeInput,
  labelFor,
  labelText,
  placeholderInput,
}) => {
  const { color } = useContext(DisignContext);
  return (
    <div className="inputText">
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        type={typeInput}
        placeholder={placeholderInput}
        id={labelFor}
        style={{ border: `1px solid ${color}` }}
      />
    </div>
  );
};

export default FormPersonales;
