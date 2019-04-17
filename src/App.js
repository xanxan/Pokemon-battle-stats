import React, { Component } from 'react';
import assets from './utils/assetsUtil';
import tableau from 'tableau-api';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.initViz()
  }
  
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Pokmonbattlestatscompared/Dashboard1?:embed=y&:display_count=yes&publish=yes';
    const vizContainer = this.vizContainer;
    new window.tableau.Viz(vizContainer, vizUrl)
  }

  getSource = (index) => {
    const object = assets.images.find(o => o.index === index) || {};
    return object.src;
  };

  render() {

    return (
      <div className="App">

          {/*<img src={this.getSource(87)} className="App-logo" alt="logo" />*/}

        <div ref={(div) => { this.vizContainer = div }}/>

        <p>This is an example prototype page.</p>

      </div>
    );
  }
}

export default App;
