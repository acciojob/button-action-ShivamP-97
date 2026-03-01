import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div id="main">
      <p id="para" className={visible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>

      <button id="click" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;