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


      item < 19 && top.push(this.row(pokemon));
      item > 18 && item < 27 && right.push(this.row(pokemon));
      item > 26 && item < 46 && bottom.push(this.row(pokemon));
      item > 45 && item < 54 && left.push(this.row(pokemon));
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
      flexGrow: 1,
      mindWidth: 50,
    };

    const styleHorizontal = {
      display: 'flex',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
    };

    return (
      <div className="App">
        <div className="list" style={styleHorizontal}>
          <div style={{width: 80}}/>
          {top}
        </div>
        <div className="list flex-view">
          <div style={styleVertical}/>
          <div className="list" style={styleVertical}>{left.reverse()}</div>
          <div style={{    flexGrow: 1}}> <TableauViz/></div>
          <div className="list" style={styleVertical}>{right}</div>
          <div style={styleVertical}/>
        </div>
        <div className="list" style={styleHorizontal}>
          <div style={{width: 80}}/>
          {bottom.reverse()}
        </div>
      </div>
    );
  }
}

export default App;
