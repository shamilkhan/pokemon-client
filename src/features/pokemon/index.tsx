// @ts-nocheck
import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "./model";
import { Paper, Box } from "@material-ui/core";

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
            <Paper style={{padding: "8px", display: "flex", flexDirection: "column", alignItems: "center", background: "#f9f0f9"}} elevation={3}>
                <h3>{data.species.name}</h3>
               <Box style={{background: "#fff"}} width={120} height={120} borderRadius="50%">
                 <img width={100} height={100} src={data.sprites.other.dream_world.front_default} alt={data.species.name} />
               </Box>
              {data.stats.map(({stat, base_stat}) => {
                return (<li>
                  {stat.name}:: {base_stat}
                </li>);
              })}
            </Paper>
          </Link>
      ) : (
        'No Data'
      )}
    </div>
  )
}
