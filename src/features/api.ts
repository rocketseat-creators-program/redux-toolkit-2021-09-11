import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints(builder) {
    return {
      listCharacters: builder.query({
        query: (page = 1) => `character?page=${page}`,
      }),
      episode: builder.query({
        query: (id) => ({ url: `episode/${id}` }),
      }),
      location: builder.query({
        query: (id) => ({ url: `location/${id}` }),
      }),
    };
  },
});

export const { useListCharactersQuery, useEpisodeQuery, useLocationQuery } =
  apiSlice;
