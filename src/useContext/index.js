import React, { createContext, useState } from "react";
import News from "./News";
export const ThemeContext = createContext();
function Context() {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <News />
    </ThemeContext.Provider>
  );
}

export default Context;
