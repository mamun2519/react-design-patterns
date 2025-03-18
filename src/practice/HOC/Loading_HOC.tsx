import { useEffect, useState } from "react";

// HOC for Loading State
const withLoading = (WrappedComment) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate data fetching
      setTimeout(() => setIsLoading(false), 2000);
    }, []);

    if (isLoading) {
      return <div>....Loading</div>;
    }

    return <WrappedComment {...props} />;
  };
};

// Regular Component
const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

// Enhanced Component

export const UserProfileWithLoading = withLoading(UserProfile);

// Usage
// function App() {
//   const user = { name: "John Doe", email: "john@example.com" };
//   return <UserProfileWithLoading user={user} />;
// }
