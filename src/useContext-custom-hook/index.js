import React from "react";
import "./theme.css";
import ThemeContext from "./ThemeContext";
import News from "./News";
function index() {
  return (
    <ThemeContext>
      <News />
    </ThemeContext>
  );
}

export default index;
