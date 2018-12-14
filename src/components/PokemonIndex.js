import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search, Header } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  render() {
    return (
      <div>
        <Header as="h1">Pokemon Searcher</Header>
        <br />
        <Search
          onSearchChange={_.debounce(() => console.log("🤔"), 500)}
          showNoResults={false}
        />
        <PokemonForm />
        <br />
        <PokemonCollection pokemon={this.props.pokemon} />
        <br />
      </div>
    );
  }
}

export default PokemonPage;
