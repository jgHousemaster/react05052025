import { useState } from "react";

export function useCounter(init = 0) {
    const [counter, setCounter] = useState(init);

    const increase = () => {
        setCounter((pre) => pre + 1);
    }

    const decrease = () => {
        setCounter((pre) => pre - 1);
    }

    const reset = () => {
        setCounter(init);
    }

    return {counter, increase, decrease, reset};
}