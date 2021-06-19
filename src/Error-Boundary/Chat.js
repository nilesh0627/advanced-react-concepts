import React, { useState } from "react";

function Chat() {
  const [error, setError] = useState(false);
  const handleClick = () => {
    setError(true);
  };

  if (error) throw new Error("Something Went Wrong");
  return (
    <div>
      <h3>This is Chat Section</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Chat;
