import { useState } from "react";

export const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggleHandler = () => setOn(!on);

  return children({ on, toggleHandler });
};

//* call example

const app = () => {
  return (
    <Toggle>
      {({ on, toggleHandler }) => {
        <div>
          <button onClick={toggleHandler}>{on ? "ON" : "OFF"}</button>
          <p>The toggle is {on ? "on" : "off"}.</p>
        </div>;
      }}
    </Toggle>
  );
};
