import React, { Component } from 'react';
import './css/Graph.css';
import {Table, Button} from 'react-bootstrap';

class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedUsers: []
    }
    this.handleCheckMark = this.handleCheckMark.bind(this);
  }

  messageUsers(addressedUsers) {
    prompt('Message');
    if(addressedUsers.length > 0) {
      var users = addressedUsers.map(user=>{return "@"+user}).join(' ');
      alert(`Your message was sent to ${users}`);
    } else {
      alert('you have not selected any users')
    }
  }

  handleCheckMark(e) {
    this.setState({
      selectedUsers: this.state.selectedUsers.concat(e.target.value)
    })
  }

  render() {
    var renderTable = (userInfo) => {
      var usercells = [];
      for(var i = 0; i < userInfo.length; i++) {
        usercells.push(<tr>
        <td>
          <input
            type="checkbox"
            value={userInfo[i].username}
            name="selectedUser"
            onChange={this.handleCheckMark}/>

        </td>
        <td>{userInfo[i].username}</td>
        <td>{userInfo[i].location}</td>
        <td>{userInfo[i].hashtags.map(hashtag => {return "#" + hashtag.text}).join(', ')}</td>
        <td>{userInfo[i].likes}</td></tr>);
      }
      return usercells;
    }
    var users = renderTable(this.props.userInfo);
    return (
      <div>
        <div ref="map" id="mapView" style={{
          height: '100px',
          width: '100px',
          position: 'absolute',
          overflow: 'visible'
        }}>
        </div>
        <div className="nv">
          <span>#{this.props.searchInput}</span>
          <Button className="navButton" bsStyle="primary" type="submit"  onClick={()=>{this.props.setView("Map")}}>Map</Button>
          <Button className="navButton" bsStyle="primary" onClick={()=>{this.messageUsers(this.state.selectedUsers)}}>Message</Button>
          <Button className="navButton" bsStyle="primary" type="submit" onClick={()=>{this.props.setView("FrontPage")}}>Home Page</Button>
        </div>
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <th>Message To:</th>
              <th>Username</th>
              <th>Location</th>
              <th>Other Hashtags</th>
              <th>Likes</th>
            </tr>
            {users}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Graph
