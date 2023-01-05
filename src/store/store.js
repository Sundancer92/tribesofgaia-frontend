import { configureStore } from "@reduxjs/toolkit";

import { tribesofgaiaApi } from "./api/tribesofgaiaApi";
import  userDataReducer  from "./slices/userData";

export const store = configureStore({
	reducer: {
		[tribesofgaiaApi.reducerPath]: tribesofgaiaApi.reducer,
		userData: userDataReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tribesofgaiaApi.middleware),
});
