// @ts-nocheck
import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "./model";
import { Paper } from "@material-ui/core";

export const Pokemon = ({ name }: { name: string }) => {
  const {
    data,
    error,
    isLoading,
  } = useGetPokemonByNameQuery(name);

  return (
    <div style={{ float: 'left', textAlign: 'center' }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
          <Link to={`/pokemon/${data.species.name}`}>
          <Paper style={{padding: "8px"}} elevation={3}>
              <h3>{data.species.name}</h3>
              <div>
                <img width={100} height={100} src={data.sprites.other.dream_world.front_default} alt={data.species.name} />
              </div>
          </Paper>
          </Link>
      ) : (
        'No Data'
      )}
    </div>
  )
}
