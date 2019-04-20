import React, { createContext, useContext } from "react";

const NumberContext = createContext();

const NumberApp = () => (
  <NumberContext.Provider value={42}>
    <div>
      <Display />
    </div>
  </NumberContext.Provider>
);

const Display = () => {
  const value = useContext(NumberContext);
  return <div>The answer is {value}</div>;
};

export default NumberApp;
