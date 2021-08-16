import { useGetPokemonListQuery } from "./model";
import {Pokemon} from "../pokemon";

const PokemonList = () => {
  const { data } = useGetPokemonListQuery("10");
  return <ul>
    {data && data.results.map(item => {
      return <Pokemon key={item.name} name={item.name} />
    })}
  </ul>
};

export { PokemonList };
