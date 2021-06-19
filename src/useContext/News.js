import React, { useContext, Fragment } from "react";
import { ThemeContext } from "./index";
import "./theme.css";
function News() {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <main className={dark ? "dark" : "light"}>
      <h2>This is News Section</h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, odit.
        Sit ducimus, beatae deleniti quibusdam quidem tenetur eius modi suscipit
        reiciendis laudantium, necessitatibus dolorem autem a nemo. Accusantium
        ipsa id autem alias voluptas, architecto, ullam libero enim quis dolores
        doloribus, facilis dolore at sequi illum.
      </div>
      <button onClick={() => setDark((dark) => !dark)}>Toggle Theme</button>
    </main>
  );
}

export default News;
