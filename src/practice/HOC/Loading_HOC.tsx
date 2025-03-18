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
