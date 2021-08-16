import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonListApi = createApi({
    reducerPath: 'pokemonListApi',    
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    endpoints: (builder) => ({
        getPokemonList: builder.query<unknown, string>({
            query: (limit) => `pokemon?limit=${limit}`,
        }),
    }),
});

export const { useGetPokemonListQuery } = pokemonListApi;