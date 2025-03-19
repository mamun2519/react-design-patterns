import { useState } from "react";

export const Toggle = ({ render }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return render({ on, toggle });
};

// use example

const app = () => {
  return (
    <Toggle
      render={({ on, toggle }) => {
        return (
          <div>
            <button onClick={toggle}>{on ? "ON" : "OFF"}</button>
            <p>The toggle is {on ? "on" : "off"}.</p>
          </div>
        );
      }}
    />
  );
};
