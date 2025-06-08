import React, { useState } from 'react'

function useDebounce(init, delay=500) {
    const [value, setValue] = useState(init);
    let timer;

    const debouncedSetValue = async (newValue) => {
        clearTimeout(timer);
        timer = await setTimeout(() => {
            setValue(newValue);
        }, delay)
    }
  return [value, debouncedSetValue];
}

export default useDebounce