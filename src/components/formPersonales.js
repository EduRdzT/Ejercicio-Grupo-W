import React from "react";

const FormPersonales = ({
  typeInput,
  labelFor,
  labelText,
  placeholderInput,
}) => {
  return (
    <div className="inputText">
      <label htmlFor={labelFor}>{labelText}</label>
      <input type={typeInput} placeholder={placeholderInput} id={labelFor} />
    </div>
  );
};

export default FormPersonales;
