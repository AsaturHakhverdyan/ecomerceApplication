
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'CART',
    initialState :[],
    reducers: {
        setCart: (state, action) => {
            return [ ...state, action.payload ]
        }
    }
})

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
