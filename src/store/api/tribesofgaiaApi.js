import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// url: "https://tribesofgaia-api.deta.dev/",
// url: "http://localhost:5000/",

export const tribesofgaiaApi = createApi({
	reducerPath: "tribesofgaiaApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5000/",
	}),
	endpoints: (builder) => ({
		loginAuth: builder.mutation({
			query: (authData) => ({
				url: "/loginAuth",
				method: "POST",
				body: authData,
			}),
		}),
		getSpiritsNames: builder.query({
			query: () => '/spirits',
		})
	}),
});

export const { useLoginAuthMutation, useGetSpiritsNamesQuery } = tribesofgaiaApi;
