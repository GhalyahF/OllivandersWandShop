import React, { Component } from "react";
import "./App.css";
//data
import wands from "./wands";
//Components
import WandList from "./Components/WandsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br /> <br />
          <h1 className="App-title">Ollivander's Wand Shop</h1>
          <img src="./favicon.ico" className="App-logo" alt="logo" />
        </header>
        <br /> <br />
        <div className="content col-10">
          <WandList wands={wands} />
        </div>
      </div>
    );
  }
}

export default App;
