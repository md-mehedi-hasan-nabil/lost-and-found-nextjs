import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/auth/create-account",
                method: "POST",
                body: data,
            }),

        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),


        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
