import { createSlice } from "@reduxjs/toolkit";

 interface IUser {
    _id: string;
    username: string;
    email: string;
}

interface IInitialState {
    accessToken: undefined | string,
    user: undefined | IUser,
}

const initialState: IInitialState = {
    accessToken: undefined,
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
