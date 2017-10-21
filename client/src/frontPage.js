import React, { Component } from 'react';
import './css/App.css';

class Frontpage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>Enter your hashtag of interest to find followers for your cause</div>
        #<input
          type="text"
          name="hashtag"
          onChange={this.props.onInputChange}
          placeholder="e.g. MeToo">
        </input>
        <button type="submit" onClick={()=>{this.props.setView("Graph")}}>{"->"}</button>
      </div>
    );
  }
}

export default Frontpage
