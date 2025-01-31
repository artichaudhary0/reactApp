import React, { useState } from "react";

function ShowHideText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <p>
        Question : Lorem ipsum dolor sit amet consectetur adipisicing elit ?
      </p>

      {isVisible && (
        <p>
          Answer : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum explicabo et consectetur similique quasi possimus, numquam
          saepe beatae perspiciatis repudiandae.
        </p>
      )}

      <button onClick={() => setIsVisible(!isVisible)}>Show answer</button>
    </div>
  );
}

export default ShowHideText;
