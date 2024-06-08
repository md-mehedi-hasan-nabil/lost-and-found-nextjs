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
        getMyAllItems: builder.query({
            query: (type: "lost" | "found" | undefined) => {
                let url = "/items/my-items"

                if (type) {
                    url += `?type=${type}`
                }

                return {
                    url,
                }
            },
            providesTags: ["my-items"]
        }),
        getItem: builder.query({
            query: (data: {
                type: "lost" | "found" | undefined,
                itemId: string
            }) => {
                const { itemId, type } = data
                let url = `/items/${itemId}`

                if (type) {
                    url += `?type=${type}`
                }

                return {
                    url,
                }
            },
            providesTags: ["item"]
        }),
        createItem: builder.mutation({
            query: (data) => ({
                url: "/items",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["items"]
        }),
        updateItemStatus: builder.mutation({
            query: (data) => ({
                url: `/items/${data.itemId}`,
                method: "PATCH",
                body: data.body,
            }),
            invalidatesTags: ["items"]
        }),
    }),
});

export const {
    useGetAllItemsQuery,
    useGetMyAllItemsQuery,
    useCreateItemMutation,
    useGetItemQuery,
    useUpdateItemStatusMutation
} = itemApi;
