import React, { Component } from 'react';
import './css/Frontpage.css';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Frontpage extends Component {
  constructor(props) {
    super(props)
    // this.oath = this.oauth.bind(this);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        #
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Enter your hashtag of interest to find followers for your cause</ControlLabel>
            <FormControl
              type="e.g. MeToo"
              placeholder="Enter text"
              onChange={this.props.onInputChange}
              bsSize="large"
            />
          </FormGroup>
        </form>
        <Button bsStyle="primary" onClick={()=>{this.props.setView("Graph")}}>{"->"}</Button>
      </div>
    );
  }
}

export default Frontpage
