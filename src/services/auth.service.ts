import { authKey } from "@/contants/authKey";
import { AuthUser } from "@/types";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/localstorage";
import { jwtDecode } from "jwt-decode";

export function storeUserInfo(token: string) {
    return setToLocalStorage(authKey, token)
}

export function getUserInfo(): AuthUser | null {
    const authToken = getFromLocalStorage(authKey)

    if (authToken) {
        const decoded = jwtDecode(authToken) as AuthUser;

        return decoded
    } else {
        return null
    }
}

export function isLoggedIn() {
    const authToken = getFromLocalStorage(authKey)

    if (authToken)
        return !!authKey
}

export function removeUser() {
    return removeFromLocalStorage(authKey)
}