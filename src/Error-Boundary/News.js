import React, { useState } from "react";

function News() {
  const [error, setError] = useState(false);
  const handleClick = () => {
    setError(true);
  };

  if (error) throw new Error("Something Went Wrong");
  return (
    <div>
      <h3>This is News Section.</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default News;
