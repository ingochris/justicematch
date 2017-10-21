import React, { Component } from 'react';
import './css/App.css';
import Frontpage from './frontPage';
import Graph from './graph';
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      view: 'FrontPage'
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  setView(page) {
    this.setState({})
  }

  onInputChange(e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    var view;
    if(this.state.view === "FrontPage") {
      view = (
        <Frontpage
          searchInput = {this.state.searchInput}
          onInputChange = {this.onInputChange}
        />)
    } else {
      view = (
        <Graph
          userInfo = {this.state.userInfo}
        />
      )
    }
    return (
      <div className="App">
        {view}
      </div>
    );
  }
}

export default App;
