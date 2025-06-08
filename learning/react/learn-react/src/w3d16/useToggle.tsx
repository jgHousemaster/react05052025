import React, { useState } from "react";

export const useToggle = (initialVal = false) => {
    const [state, setState] = useState(false);

    const toggle = () => {
        setState((pre) => !pre)
    }

    return [state, toggle];
}