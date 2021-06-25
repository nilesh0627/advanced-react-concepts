import React, { useEffect, useMemo, useState } from "react";
import "./index.css";
function Main() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //Memoized themeStyles So that it doesn't need to be created again and again
  //on every render even if 'dark' variable has not changed.
  const themeStyles = useMemo(() => {
    return {
      color: dark ? "#333" : "#fff",
      backgroundColor: dark ? "#fff" : "#333",
      padding: "0.5rem 1rem",
      width: "200px",
      margin: "0 auto",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Styles Changed");
  }, [themeStyles]);
  return (
    <div className="container">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calculating Slow Function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default Main;
