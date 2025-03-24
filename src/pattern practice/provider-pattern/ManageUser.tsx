import { useState } from "react";

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
