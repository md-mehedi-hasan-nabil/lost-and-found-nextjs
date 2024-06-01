import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => ({
                url: "/categories",
            }),
            providesTags: ['categories'],
        }),
        createCategory: builder.mutation({
            query: (data) => ({
                url: "/categories",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["categories"]
        }),
    }),
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation } = categoryApi;
