import React, { useRef } from "react";
import Login from "./useRef";
import useDebounce from "./useDebounce";
import useFetch from "./useFetch";

function index() {
  const [inputValue, setInputValue] = useDebounce("", 1000);
  const {data, isLoading, isError} = useFetch("https://dummyjson.com/quotes/1");

  return (
    <div>
      D16
      <br />
      <Login />
      <div>
        Debounced input:{" "}
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div>Your input: {inputValue}</div>
      <div>Quote: {isLoading ? "Loading..." : <div>{data.quote}</div>}</div>
    </div>
  );
}

export default index;
