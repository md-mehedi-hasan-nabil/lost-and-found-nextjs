import { apiSlice } from "../api/apiSlice";

export const claimApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createClaims: builder.mutation({
            query: (data) => ({
                url: "/claims",
                method: "POST",
                body: data,
            })
        }),
    }),
});

export const { useCreateClaimsMutation } = claimApi;
