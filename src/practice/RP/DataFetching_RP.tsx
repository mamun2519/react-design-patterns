import { useEffect, useState } from "react";

export const UserDataFetching = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading });
};

//use example
const app = () => {
  return (
    <div>
      <UserDataFetching
        url="https://jsonplaceholder.typicode.com/users"
        render={({ data, loading }) => {
          if (loading) return <div>Loading...</div>;
          return (
            <ul>
              {data.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};
