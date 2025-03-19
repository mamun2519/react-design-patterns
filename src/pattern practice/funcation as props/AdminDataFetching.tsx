import { Children, useEffect, useState } from "react";

const AdminDataFetching = ({ url, children }) => {
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

  return children({ data, loading });
};

//use case
const app = () => {
  return (
    <AdminDataFetching url="https://jsonplaceholder.typicode.com/users">
      {({ data, loading }) => {
        if (loading) return <div>Loading...</div>;
        return (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    </AdminDataFetching>
  );
};
