import React, { Component } from 'react';
import './css/App.css';
import Frontpage from './frontPage';
import Graph from './graph';
import Map from './map';
import userInfo from './userinfo';
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
    } else if (this.state.view === "Graph"){
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
    } else if(this.state.view === "Map") {
      view = (
        <div><Map
          center={{
            lat: 37.78,
            lng: -122.39
          }}
        />
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
      </div>
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
