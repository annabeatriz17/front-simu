const isClient = typeof window !== "undefined";



export const getSessionsStorage = (key, initialValue) => {
    if (!isClient) return initialValue;

    const stored = sessionStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialValue;
}

export const setSessionsStorage = (key, value) => {
    if (isClient) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
};