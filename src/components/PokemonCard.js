import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showFrontOrBack: true
    };
  }

  setImage = () => {
    if (this.state.showFrontOrBack === true) {
      return <img src={this.props.pokemon.sprites.front} alt="oh no!" />;
    } else {
      return <img src={this.props.pokemon.sprites.back} alt="oh no!" />;
    }
  };

  mapOverStat = () => {
    return this.props.pokemon.stats.map(stat => {
      if (stat.name === "hp") {
        return <div> HP {stat.value}</div>;
      }
    });
  };
  render() {
    return (
      <Card>
        <div>
          <div
            className="image"
            onClick={() =>
              this.setState({
                showFrontOrBack: !this.state.showFrontOrBack
              })
            }
          >
            {this.setImage()}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.mapOverStat()}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
