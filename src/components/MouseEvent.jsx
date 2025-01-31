import { useState } from "react";

function MouseEvent() {
  const [bgColor, setBgColor] = useState("lightblue");
  const handleMouseOutEvent = () => setBgColor("black");
  const handleMouseInEvent = () => setBgColor("white");

  return (
    <div
      style={{ width: "300px", height: "200px", backgroundColor: bgColor }}
      onMouseOver={handleMouseInEvent}
      onMouseOut={handleMouseOutEvent}
    >
      Hover over
    </div>
  );
}

export default MouseEvent;
