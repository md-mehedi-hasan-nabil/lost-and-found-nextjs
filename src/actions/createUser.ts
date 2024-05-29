'use server'

import { IRegister } from "@/types";

export async function createUser(payload: IRegister) {
    console.log(payload)
}
