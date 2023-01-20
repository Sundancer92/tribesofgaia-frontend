import { configureStore } from "@reduxjs/toolkit";

import { tribesofgaiaApi } from "./api/tribesofgaiaApi";
import userDataReducer  from "./slices/userData";
import spiritsDataReducer from "./slices/spiritsData";

export const store = configureStore({
	reducer: {
		[tribesofgaiaApi.reducerPath]: tribesofgaiaApi.reducer,
		userData: userDataReducer,
		spiritsData: spiritsDataReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tribesofgaiaApi.middleware),
});
