import { ReactNode } from "react";

//  3. Separating Layout and Content (Without SOC)
function bedUserList({ users }) {
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

const UserList = ({
  user,
}: {
  user: { id: string; name: string; email: string };
}) => {
  return (
    <div key={user.id} className="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export const UserContainer = ({ users }) => {
  return (
    <UserLayout>
      {users.map((user: { id: string; name: string; email: string }) => (
        <UserList user={user} />
      ))}
    </UserLayout>
  );
};
