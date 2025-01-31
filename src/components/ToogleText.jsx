import React from "react";
import { useState } from "react";

function ToogleText() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>{isOn ? "On" : "Off"}</h1>

      <button onClick={() => setIsOn(!isOn)}>Change Text</button>
    </div>
  );
}

export default ToogleText;
