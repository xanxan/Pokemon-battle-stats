import React, { Component } from 'react';
import assets from './utils/assetsUtil';
import data from './assets/jsons/csvjson.json';
import TableauViz from './components/tableauViz';

import './App.css';

class App extends Component {

  getSource = (index) => {
    const object = assets.images.find(o => o.index === index) || {};
    return object.src;
  };

  row = (p) => {
    return (
      <div className="list-item" style={{padding: 5}}>
        <img src={p.image || assets.default} alt={p.name} style={{height: 70}}/>
      </div>
    );
  };

  render() {

    let pokemons = [];
    let top = [];
    let bottom =  [];
    let left = [];
    let right = [];

    for (const item in data) {
      let pokemon = data[item] || {};
      pokemon.image = this.getSource(pokemon.pokedex_number);
      item < 10 && pokemons.push(this.row(pokemon));


      item < 13 && top.push(this.row(pokemon));
      item > 12 && item < 21 && right.push(this.row(pokemon));
      item > 20 && item < 34 && bottom.push(this.row(pokemon));
      item > 33 && item < 42 && left.push(this.row(pokemon));
    }

    const style = {
      display: 'inline-flex',
      margin: 24,
      width: 1200,
      paddingBottom: 16,
      overflowX: 'auto',
      whiteSpace: 'nowrap',
    };

    const styleVertical = {
      overflowX: 'auto',
      whiteSpace: 'nowrap',
    };

    const styleHorizontal = {
      display: 'inline-flex',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
    };

    return (
      <div className="App">
        <div className="list" style={styleHorizontal}>
          {top}
        </div>
        <div className="list flex-view">
          <div className="list" style={styleVertical}>{left.reverse()}</div>
          <TableauViz/>
          <div className="list" style={styleVertical}>{right}</div>
        </div>
        <div className="list" style={styleHorizontal}>
          {bottom.reverse()}
        </div>
      </div>
    );
  }
}

export default App;
