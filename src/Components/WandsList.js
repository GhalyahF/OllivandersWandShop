import React, { Component } from "react";
//Components
import WandCard from "./Card";

class WandList extends Component {
  render() {
    const wandCards = this.props.wands.map(wand => (
      <WandCard key={wand.wood} wand= {wand}/>
    ));

    return (
      <div className="wands">
        <div className="row">{wandCards}</div>
      </div>
    );
  }
}

export default WandList;
