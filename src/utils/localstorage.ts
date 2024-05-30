export function setToLocalStorage(key: string, token: string) {
    if (typeof window !== "undefined" && key) {
        localStorage.setItem(key, token);
    }
}

export function getFromLocalStorage(key: string) {
    if (typeof window === "undefined" || !key) {
        return null;
    }

    return localStorage.getItem("accessToken");
}