import { useState, useEffect } from "react";

const getLocalStorageValue = (key, initialVal) => {
    const isValueinLocal = localStorage.getItem(key);
    if (isValueinLocal) {
        return JSON.parse(isValueinLocal);
    }
    return initialVal;
};
export const useStoreValToLocStorage = (key, initialVal) => {
    const [value, setValue] = useState(() => {
        return getLocalStorageValue(key, initialVal);
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};
