"use server"

export async function loginUser(payload: {
    email: string;
    password: string;
}) {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
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

    return response;
}
