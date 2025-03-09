import { ComponentType, useState } from "react";

const withDataFetch = (Component: ComponentType, url: string) => {
  return (props: any) => {
    const [data, setData] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  };
};
