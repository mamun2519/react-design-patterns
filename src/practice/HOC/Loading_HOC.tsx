import { useState } from "react";

// HOC for Loading State
const withLoading = (WrappedComment) => {
  return (props) => {
    const [isLoading, setLoading] = useState(true);
  };
};
