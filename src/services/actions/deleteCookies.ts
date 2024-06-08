'use server'

import { cookies } from 'next/headers'

export async function deleteCookies(keys: string[]) {
    keys.forEach((key) => {
        cookies().delete(key)
    })
}