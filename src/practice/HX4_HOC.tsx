import { ComponentType, useEffect, useState } from "react";

export const withComponentDataFetch = (
  Component: ComponentType | any,
  url: string
) => {
  return (props: any) => {
    const [data, setData] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

  
