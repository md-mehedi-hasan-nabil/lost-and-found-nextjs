import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    accessToken: undefined | string,
}

const initialState: IInitialState = {
    accessToken: undefined
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
