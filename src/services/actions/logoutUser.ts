import { authKey } from "@/contants/authKey"
import { deleteCookies } from "./deleteCookies"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function logoutUser(router: AppRouterInstance) {
    localStorage.removeItem(authKey)
    deleteCookies([authKey, "refreshToken"])
    router.push("/")
    router.refresh()
}