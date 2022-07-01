import React from "react";

const TitleSection = ({ title, subtitle }) => {
  return (
    <>
      <h2>
        <span>{title}</span>
      </h2>
      <h5>{subtitle}</h5>
    </>
  );
};

export default TitleSection;
