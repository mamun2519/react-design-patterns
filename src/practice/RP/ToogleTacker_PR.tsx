import { useState } from "react";

export const Toggle = ({ render }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return render({ on, toggle });
};
