import { apiSlice } from "../api/apiSlice";

export const itemApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllItems: builder.query({
            query: (type: "lost" | "found" | undefined) => {
                let url = "/items"

                if (type) {
                    url += `?type=${type}`
                }

                return {
                    url,
                }
            },
            providesTags: ["items"]
        }),
        createItem: builder.mutation({
            query: (data) => ({
                url: "/items",
                method: "POST",
                body: data,
            })
        }),
    }),
});

export const { useGetAllItemsQuery, useCreateItemMutation } = itemApi;
