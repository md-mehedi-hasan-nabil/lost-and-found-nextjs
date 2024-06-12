'use server'

import { IRegister } from "@/types";

export async function createUser(payload: IRegister) {
    const { profile: { age } } = payload
    const data = {
        ...payload,
        profile: {
            ...payload.profile,
            age: Number(age)
        }
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    const response = await res.json();

    return response;
}