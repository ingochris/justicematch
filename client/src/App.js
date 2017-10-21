import React, { Component } from 'react';
import './css/App.css';
import Frontpage from './frontPage';
import Graph from './graph';
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      view: 'FrontPage',
      userInfo: {}
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.setView = this.setView.bind(this);
  }

  setView(page) {
    this.setState({view:page});
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
          onInputChange = {this.onInputChange}
          setView = {this.setView}
        />)
    } else {
      view = (
        <Graph
          searchInput = {this.state.searchInput}
          setView = {this.setView}
          userInfo = {
            [
              {username: 'hi', location: 'sf', hashtags: ['yo', 'there'], likes: 1},
              {username: 'there', location: 'fremont', hashtags: ['grog', 'pull'], likes: 2}
            ]
            // this.state.userInfo
          }
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
