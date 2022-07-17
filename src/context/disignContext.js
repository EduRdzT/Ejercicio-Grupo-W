import { createContext, useState } from "react";

const DisignContext = createContext();

const initialColor = "rgb(255, 0, 0)";

const DisignProvide = ({ children }) => {
  const [color, setColor] = useState(initialColor);

  const checkboxStyle = {
    backgroundColor: color,
    color: "white",
  };

  const data = { color, setColor, checkboxStyle };

  return (
    <DisignContext.Provider value={data}>{children}</DisignContext.Provider>
  );
};

export { DisignProvide };
export default DisignContext;
