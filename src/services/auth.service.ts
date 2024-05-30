import { authKey } from "@/contants/authKey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localstorage";
import { jwtDecode } from "jwt-decode";

export function storeUserInfo(token: string) {
    return setToLocalStorage(authKey, token)
}

export function getUserInfo() {
    const authToken = getFromLocalStorage(authKey)
    
    if (authToken) {
        return jwtDecode(authToken);
    } else {
        return null
    }
}