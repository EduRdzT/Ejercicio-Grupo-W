import React, { useContext } from "react";
import DisignContext from "../context/disignContext";

const TitleSection = ({ title, subtitle }) => {
  const { color } = useContext(DisignContext);
  return (
    <>
      <h2 style={{ color: color }}>
        <span>{title}</span>
        <div className="line" style={{ borderTop: `1px solid ${color}` }}></div>
      </h2>
      <h5>{subtitle}</h5>
    </>
  );
};

export default TitleSection;
