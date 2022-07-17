import React, { useContext } from "react";
import DisignContext from "../context/disignContext";

const FormSelect = ({ seccion, options = ["selecciona"], modelo }) => {
  const { color } = useContext(DisignContext);

  return (
    <div className="inputSelect">
      <label htmlFor={seccion}>{seccion}</label>
      <select
        name={seccion}
        id={seccion}
        onChange={modelo}
        style={{ border: `1px solid ${color}` }}
      >
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
