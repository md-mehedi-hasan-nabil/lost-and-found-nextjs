import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    searchKeyword: string;
    categoryId: string;
}

const initialState: IInitialState = {
    searchKeyword: "",
    categoryId: ""
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        handleSearchKeyword: (state, action: PayloadAction<string>) => {
            state.searchKeyword = action.payload
        },
        selectCategory: (state, action: PayloadAction<string>) => {
            state.categoryId = action.payload
        }
    },
});

export const { handleSearchKeyword, selectCategory } = itemSlice.actions;

export default itemSlice.reducer;
