import { useState, useContext, createContext } from "react";

const Theme = createContext();
export const useTheme = () => useContext(Theme);

function ThemeContext({ children }) {
  const [dark, setDark] = useState(false);
  return <Theme.Provider value={{ dark, setDark }}>{children}</Theme.Provider>;
}

export default ThemeContext;
