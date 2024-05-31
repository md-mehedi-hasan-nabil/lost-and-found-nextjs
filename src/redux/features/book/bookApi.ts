import { apiSlice } from "../api/apiSlice";

export const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => ({
                url: "/book",
            }),
            providesTags: ['books'],
        }),
        getAllCreatorBooks: builder.query({
            query: (userId) => ({
                url: `/book/creator/${userId}`,
            }),
            providesTags: ['creator-book'],
        }),
        getBook: builder.query({
            query: (bookId) => ({
                url: `/book/${bookId}`,
            }),
        }),
        getCart: builder.query({
            query: () => ({
                url: `/cart`,
            }),
            providesTags: ["carts"]
        }),
        bookAddToCart: builder.mutation({
            query: (data) => ({
                url: "/cart/add-to-cart",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["carts", "books"]
        }),
        createNewBook: builder.mutation({
            query: (data) => ({
                url: "/book",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["books"]
        }),
        updateBookInfo: builder.mutation({
            query: (data) => ({
                url: `/book/${data.bookId}`,
                method: "PATCH",
                body: data.body,
            }),
            invalidatesTags: ["books"]
        }),
        deleteBook: builder.mutation({
            query: (bookId) => ({
                url: `/book/${bookId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["books", "creator-book"]
        }),
        bulkDeleteBook: builder.mutation({
            query: (data) => ({
                url: `/book`,
                method: "DELETE",
                body: data
            }),
            invalidatesTags: ["books", "creator-book"]
        }),
        bookRemoveToCart: builder.mutation({
            query: (cartId) => ({
                url: `/cart/add-to-cart/${cartId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["carts", "books"]
        }),
    }),
});

export const { useGetAllBooksQuery, useGetAllCreatorBooksQuery, useGetBookQuery, useGetCartQuery, useBookAddToCartMutation, useCreateNewBookMutation, useUpdateBookInfoMutation, useDeleteBookMutation, useBulkDeleteBookMutation, useBookRemoveToCartMutation } = bookApi;
