import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Responce = {
    results: {name: string}[];
}

export const pokemonListApi = createApi({
    reducerPath: 'pokemonListApi',    
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    endpoints: (builder) => ({
        getPokemonList: builder.query<Responce, number>({
            query: (limit) => `pokemon?limit=${limit}`,
        }),
    }),
});

export const { useGetPokemonListQuery } = pokemonListApi;