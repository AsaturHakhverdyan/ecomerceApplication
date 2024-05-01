import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	category: "",
	value: "",
};

const searchSlice = createSlice({
	name: "SEARCH",
	initialState,
	reducers: {
		setSearchValue: (state, action) => {
			return {
				...state,
				category: action.payload.category,
				value: action.payload.value,
			};
		},
	},
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
