import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <MainContent theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

function Header({ theme, setTheme }) {
  return (
    <header style={{ background: theme === "light" ? "#fff" : "#333" }}>
      <Button theme={theme} setTheme={setTheme} />
    </header>
  );
}

function Button({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{ color: theme === "light" ? "#000" : "#fff" }}
    >
      Toggle Theme
    </button>
  );
}
