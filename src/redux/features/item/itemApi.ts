import { apiSlice } from "../api/apiSlice";

export const itemApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createItem: builder.mutation({
            query: (data) => ({
                url: "/items",
                method: "POST",
                body: data,
            })
        }),
    }),
});

export const { useCreateItemMutation } = itemApi;
