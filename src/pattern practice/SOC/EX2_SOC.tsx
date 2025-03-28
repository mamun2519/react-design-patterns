import { useEffect, useState } from "react";

//with out SOC
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

//* With SOC-------------------

const useUser = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return user;
};
type User = {
  name: string;
  email: string;
};

export const UserProfile = ({ user }: { user: User }) => {
  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export const UserProfileContainer = ({ userId }: { userId: string }) => {
  const user = useUser({ userId });
  return <UserProfile user={user} />;
};
