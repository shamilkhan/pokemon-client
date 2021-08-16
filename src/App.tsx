import { Pokemon } from "./features/pokemon";
import { PokemonList } from "./features/pokemon-list";
import "./App.css";

export const App = () => {
  return (
    <>
        <PokemonList />
        <Pokemon name="bulbasaur" />
        <Pokemon name="pikachu" />
    </>
  );
};
