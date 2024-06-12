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
        changePassword: builder.mutation({
            query: (data) => ({
                url: "/auth/change-password",
                method: "PATCH",
                body: data,
            }),
        }),
        myProfile: builder.query({
            query: () => ({
                url: "/my-profile",
            }),
            providesTags: ["profile"]
        }),
        updateUserInfo: builder.mutation({
            query: (data) => ({
                url: "/my-profile",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["profile"]
        }),
    }),
});

export const { useLoginMutation,
    useRegisterMutation,
    useMyProfileQuery,
    useUpdateUserInfoMutation,
    useChangePasswordMutation
} = authApi;
