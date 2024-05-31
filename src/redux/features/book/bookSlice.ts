import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    titleSearch: string | null;
    priceRange: number;
    bookPage: number;
    authorFilter: string | null;
    isbnSearch: string | null;
    genreFilter: string | null;
    publisherFilter: string | null;
    seriesFilter: string | null;
    languageFilter: string | null;
    bookFormatFilter: string | null;
    bookISBN: string | null;
    deleteBookIdList: string[];
}

const initialState: IInitialState = {
    titleSearch: null,
    priceRange: 0,
    bookPage: 0,
    authorFilter: null,
    isbnSearch: null,
    genreFilter: null,
    publisherFilter: null,
    seriesFilter: null,
    languageFilter: null,
    bookFormatFilter: null,
    bookISBN: null,
    deleteBookIdList: []
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setTitleSearch: (state, action: PayloadAction<string>) => {
            state.titleSearch = action.payload;
        },
        setPriceRange: (state, action: PayloadAction<number>) => {
            state.priceRange = action.payload;
        },
        setBookPage: (state, action: PayloadAction<number>) => {
            state.bookPage = action.payload;
        },
        setAuthorFilter: (state, action: PayloadAction<string>) => {
            state.authorFilter = action.payload;
        },
        setIsbnSearch: (state, action: PayloadAction<string>) => {
            state.isbnSearch = action.payload;
        },
        setGenreFilter: (state, action: PayloadAction<string>) => {
            state.genreFilter = action.payload;
        },
        setPublisherFilter: (state, action: PayloadAction<string>) => {
            state.publisherFilter = action.payload;
        },
        setSeriesFilter: (state, action: PayloadAction<string>) => {
            state.seriesFilter = action.payload;
        },
        setLanguageFilter: (state, action: PayloadAction<string>) => {
            state.languageFilter = action.payload;
        },
        setBookFormatFilter: (state, action: PayloadAction<string>) => {
            state.bookFormatFilter = action.payload;
        },
        setBookISBN: (state, action: PayloadAction<string>) => {
            state.bookISBN = action.payload;
        },
        setReset: (state) => {
            state.titleSearch = "";
            state.priceRange = 0;
            state.bookPage = 0;
            state.authorFilter = "";
            state.isbnSearch = "";
            state.genreFilter = "";
            state.publisherFilter = "";
            state.seriesFilter = "";
            state.languageFilter = "";
            state.bookFormatFilter = "";
            state.bookISBN = null;
        },
        setDeleteBookIdList: (state, action: PayloadAction<string | string[]>) => {
            if (typeof action.payload === "string") {
                if (state.deleteBookIdList.includes(action.payload)) {
                    const indexToDelete = state.deleteBookIdList.indexOf(action.payload);

                    if (indexToDelete !== -1) {
                        state.deleteBookIdList.splice(indexToDelete, 1);
                    }
                } else {
                    state.deleteBookIdList.push(action.payload);
                }
            } else {
                state.deleteBookIdList = action.payload;
            }
        },
    },
});

export const {
    setTitleSearch,
    setPriceRange,
    setBookPage,
    setAuthorFilter,
    setIsbnSearch,
    setGenreFilter,
    setPublisherFilter,
    setSeriesFilter,
    setLanguageFilter,
    setBookFormatFilter,
    setReset,
    setBookISBN,
    setDeleteBookIdList
} = bookSlice.actions;

export default bookSlice.reducer;
