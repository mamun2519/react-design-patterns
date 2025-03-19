import { useState } from "react";

const Toggle = ({ render }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
};
