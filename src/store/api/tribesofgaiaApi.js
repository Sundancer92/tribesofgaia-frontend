import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// url: "https://tribesofgaia-api.deta.dev/validate",
// url: "http://localhost:5000/validate",

export const tribesofgaiaApi = createApi({
	reducerPath: "tribesofgaiaApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://tribesofgaia-api.deta.dev/validate",
	}),
	endpoints: (builder) => ({
		loginAuth: builder.mutation({
			query: (authData) => ({
				url: "/loginAuth",
				method: "POST",
				body: authData,
			}),
		}),
	}),
});

export const { useLoginAuthMutation } = tribesofgaiaApi;
