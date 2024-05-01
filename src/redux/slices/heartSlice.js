
import { createSlice } from "@reduxjs/toolkit";

const heartSlice = createSlice({
    name: 'HEART',
    initialState :[],
    reducers: {
        setHeart: (state, action) => {
            return [ ...state, action.payload ]
        }
    }
})

export const { setHeart } = heartSlice.actions;
export default heartSlice.reducer;
