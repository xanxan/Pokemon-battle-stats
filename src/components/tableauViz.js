/**
 * Created by anna on 7.5.2019.
 */

import React, { Component } from 'react';
import tableau from 'tableau-api';

class TableauViz extends Component {

  componentDidMount() {
    this.initViz()
  }

  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Pokmonbattlestatscompared/Dashboard1';
    const vizContainer = this.vizContainer;
    new window.tableau.Viz(vizContainer, vizUrl)
  }

  render() {
    return (
      <div ref={(div) => { this.vizContainer = div }} style={{marginLeft: 28, marginRight: 28}}/>
    );
  }
}

export default TableauViz;
