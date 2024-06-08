import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store/store';
import { userLoggedOut } from '../auth/authSlice';
import { getFromLocalStorage } from '@/utils/localstorage';
import { authKey } from '@/contants/authKey';
import { redirect } from 'next/navigation';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        // const token = (getState() as RootState).auth.accessToken;
        const token = getFromLocalStorage(authKey)

        if (token) {
            headers.set('authorization', `${token}`);
        }

        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);

        if (result?.error?.status === 401) {
            api.dispatch(userLoggedOut());
            localStorage.clear();
            // window?.location.replace("/login")
        }

        return result;
    },
    tagTypes: ["categories", "profile", "items", "item", "my-items", "claims"],

    endpoints: () => ({}),
});
