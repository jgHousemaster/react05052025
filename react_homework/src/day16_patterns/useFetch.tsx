import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      setIsLoading(true);
      setIsError(false);
    };
  }, [url]);
  return { data: data, isLoading: isLoading, isError: isError };
}

export default useFetch;
