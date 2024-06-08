'use server'

import { cookies } from 'next/headers'

export async function removeCookies(key: string) {
    cookies().delete(key)
}