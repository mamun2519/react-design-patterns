import { useState } from "react";

// Without provider patten
function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Dashboard user={user} />
      <Settings user={user} />
    </div>
  );
}

// with provider pattens
function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Dashboard user={user} />
      <Settings user={user} />
    </div>
  );
}
