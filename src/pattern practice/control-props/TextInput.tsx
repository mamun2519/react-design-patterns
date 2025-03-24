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

//with  control props
function TextInput({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

// Usage: Parent controls the input
function App() {
  const [text, setText] = useState("");

  return <TextInput value={text} onChange={(e) => setText(e.target.value)} />;
}
