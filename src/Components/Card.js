import React, { Component } from "react";

class WandCard extends Component {
  render() {
    const wand = this.props.wand;
    return (
      <div className="card mb-6">
        <img className="card-img-top" src={wand.imageUrl} alt="wand" />
        <div className="card-body">
          <h5 className="card-title">{wand.core}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">{wand.length}</small> cm
          </p>
        </div>
      </div>
    );
  }
}

export default WandCard;
