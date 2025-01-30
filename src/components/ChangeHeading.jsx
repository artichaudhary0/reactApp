import React from "react";
import { useState } from "react";

function ChangeHeading() {
  const [heading, setHeading] = useState("My heading");

  return (
    <div>
      <h1>{heading}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore,
        aspernatur eveniet soluta nisi neque ut animi? Similique laborum fuga
        maxime consequatur accusantium, error ad, odit debitis reprehenderit
        ducimus quia nesciunt cum quam natus maiores porro ratione alias veniam
        explicabo quod esse magni quaerat. Commodi fuga ad soluta labore modi.
      </p>

      <button onClick={() => setHeading("My paragraph")}>Change heading</button>
    </div>
  );
}

export default ChangeHeading;
