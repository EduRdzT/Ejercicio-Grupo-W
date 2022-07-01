import React from "react";

const FormSelect = ({ seccion, options = ["selecciona"], modelo }) => {
  return (
    <div className="inputSelect">
      <label htmlFor={seccion}>{seccion}</label>
      <select name={seccion} id={seccion} onChange={modelo}>
        {typeof options === "string" ? (
          <option value="selecciona">selecciona</option>
        ) : (
          options.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default FormSelect;
