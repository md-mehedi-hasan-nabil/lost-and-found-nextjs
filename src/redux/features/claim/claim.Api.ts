import { apiSlice } from "../api/apiSlice";

export const claimApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllClaims: builder.query({
            query: (data) => ({
                url: "/claims",
            }),
            providesTags: ["claims"]
        }),
        createClaims: builder.mutation({
            query: (data) => ({
                url: "/claims",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["claims"]
        }),
    }),
});

export const { useGetAllClaimsQuery, useCreateClaimsMutation } = claimApi;
