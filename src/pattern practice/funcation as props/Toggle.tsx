import { useState } from "react";

export const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggleHandler = () => setOn(!on);

  return children({ on, toggleHandler });
};
