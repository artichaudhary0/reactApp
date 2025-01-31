import Counter from "./components/Counter";
import ChangeHeading from "./components/ChangeHeading";
import ToogleText from "./components/ToogleText";
import InputField from "./components/InputField";
import ShowHideText from "./components/ShowHideText";
import { useState } from "react";
import MouseEvent from "./components/MouseEvent";

function App2() {
  const [color, setColor] = useState("grey");
  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{ backgroundColor: toggle ? "lightblue" : "grey", margin: "0px" }}
    >
      <button
        onClick={() => {
          // setColor("red");
          setToggle(!toggle);
        }}
      >
        Change Color
      </button>
      <ChangeHeading />
      <hr />
      <Counter />
      <hr />
      <ToogleText />
      <hr />
      <InputField />
      <hr />
      <ShowHideText />
      <hr />
      <MouseEvent />
    </div>
  );
}

export default App2;
