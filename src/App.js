import React from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";
const URL = "http://localhost:3000/pokemon";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(fetchedPokemon => this.setState({ pokemon: fetchedPokemon }));
  }
  render() {
    return (
      <div className="App">
        <PokemonIndex pokemon={this.state.pokemon} />;
      </div>
    );
  }
}

export default App;
