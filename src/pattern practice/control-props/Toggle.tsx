import { useState } from "react";

const Toggle = ({ on, onChange }) => {
  return <button onClick={() => onChange(!on)}>{on ? "ON" : "OFF"}</button>;
};

// Usage
function App() {
  const [isOn, setIsOn] = useState(false);

  return <Toggle on={isOn} onChange={setIsOn} />;
}
