import { useState } from "react";

// Without control props
function TextInput() {
  const [value, setValue] = useState("");

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

// Usage: Parent can't access/modify the input value
function App() {
  return <TextInput />;
}
