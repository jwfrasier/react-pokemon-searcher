import React from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";
import { Container } from "semantic-ui-react";
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
      <Container>
        <div className="App">
          <PokemonIndex pokemon={this.state.pokemon} />;
        </div>
      </Container>
    );
  }
}

export default App;
