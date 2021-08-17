import { useGetPokemonListQuery } from "./model";
import {Pokemon} from "../pokemon";

const PokemonList = () => {
  const { data } = useGetPokemonListQuery(20);
  return <ul>
    {data && data.results.map(({name}) => {
      return <Pokemon key={name} name={name} />
    })}
  </ul>
};

export { PokemonList };
