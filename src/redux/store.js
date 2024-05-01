import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/languageSlice";
import searchReducer from "./slices/searchSlice";
import cartReducer from "./slices/cartSlice";
import heartSlice from "./slices/heartSlice";

export const store = configureStore({
	reducer: {
		lang: langReducer,
		searchValue: searchReducer,
		cart: cartReducer,
		heart: heartSlice,
	},
});
