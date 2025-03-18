import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Simulate authentication check
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    }, []);

    if (!isAuthenticated) {
      return <div>Please log in to view this page.</div>;
    }
    return <WrappedComponent {...props} />;
  };
};
