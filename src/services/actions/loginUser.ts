"use server"

import { authKey } from "@/contants/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUser(payload: {
    email: string;
    password: string;
}) {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    const response = await res.json();

    if (response?.success && response?.data?.token) {
        const token = response?.data?.token;
        cookies().set(authKey, token)
    }

    return response;
}
