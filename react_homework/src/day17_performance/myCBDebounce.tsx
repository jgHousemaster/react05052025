import { useCallback, useEffect, useRef, useState } from "react";

function useDebounce(callbackFn, delay) {
  let timer = useRef(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callbackFn(...args);
      }, delay);
    },
    [callbackFn, delay]
  );

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return debouncedCallback;
}

export default function DebouncedComp() {
  const [updatedText, setUpdatedText] = useState("");
  const apiCall = useCallback((text) => {
    setUpdatedText(text);
    console.log("API Called");
  }, []);
  const debouncedApiCall = useDebounce(apiCall, 500);
  const handleChange = (e) => {
    debouncedApiCall(e.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} placeholder="Search..." />
      <div>Search API: {updatedText}</div>
    </div>
  );
}
