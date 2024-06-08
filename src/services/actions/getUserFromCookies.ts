"use server"

import { AuthUser } from '@/types';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers'

export async function getUserFromCookies(key: string) {
    const cookieStore = cookies()

    const accessToken = cookieStore.get(key)?.value;

    let decodedData: AuthUser | null = null;

    if (accessToken) {
        decodedData = jwtDecode(accessToken)
    }

    return decodedData
}