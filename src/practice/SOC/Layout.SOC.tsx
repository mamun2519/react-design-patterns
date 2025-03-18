import { ReactNode } from "react";

//  3. Separating Layout and Content (Without SOC)
function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// With SOC

const UserLayout = ({ children }: { children: ReactNode }) => {
  return <div className="user-list">{children}</div>;
};

const UserContinner = ({ users }) => {};
