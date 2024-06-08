import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: (data) => ({
                url: "/users",
            })
        }),
    }),
});

export const { useGetAllUsersQuery } = userApi;
