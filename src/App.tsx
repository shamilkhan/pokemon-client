import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { Pokemon } from "./features/pokemon";
import { PokemonList } from "./features/pokemon-list";
import "./App.css";

const PokemonCard = () => {
    const { name } = useParams<{name: string}>();
    return <Pokemon name={name} />;
}

export const App = () => {
  return (
    <Router>
        <Switch>
            <Route path="/pokemon/:name">
                <PokemonCard />
            </Route>
            <Route path="/">
                <PokemonList />
            </Route>
        </Switch>
    </Router>
  );
};
