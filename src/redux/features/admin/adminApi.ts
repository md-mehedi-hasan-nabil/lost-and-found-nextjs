import { apiSlice } from "../api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAdminMeta: builder.query({
            query: (data) => ({
                url: "/admin/get-meta",
            })
        }),
        updateUserStatus: builder.mutation({
            query: (data) => ({
                url: `/admin/user-status/${data.userId}`,
                method: "PATCH",
                body: data.body,
            }),
            invalidatesTags: ["users"]
        }),
    }),
});

export const { useGetAdminMetaQuery, useUpdateUserStatusMutation } = adminApi;
