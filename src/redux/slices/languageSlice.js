import { createSlice } from "@reduxjs/toolkit";


export const languagesSlice = createSlice({
    name: 'LANGUAGE',
    initialState: 'en',
    reducers: {
        setLanguage: (state, action) => action.payload
    }
})

export const { setLanguage } = languagesSlice.actions;
export default languagesSlice.reducer;
