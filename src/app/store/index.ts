import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from "../../features/pokemon/model";
import { pokemonListApi } from '../../features/pokemon-list/model';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonListApi.reducerPath]: pokemonListApi.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, pokemonListApi.middleware),
});