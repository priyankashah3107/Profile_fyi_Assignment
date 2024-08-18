
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            // If it's on the server, return the initial value
            return typeof initialValue === "function"
                ? (initialValue as () => T)()
                : initialValue;
        } else {
            // If it's on the client, try to get the stored value
            const jsonValue = localStorage.getItem(key);
            if (jsonValue != null) return JSON.parse(jsonValue);

            return typeof initialValue === "function"
                ? (initialValue as () => T)()
                : initialValue;
        }
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue] as [typeof value, typeof setValue];
}
