import React, { Component } from 'react';
import './css/App.css';

class Graph extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var renderTable = (userInfo) => {
      var usercells = [];
      for(var i = 0; i < userInfo.length; i++) {
        usercells.push(<tr><td>{i + 1}</td>
        <td>{userInfo[i].username}</td>
        <td>{userInfo[i].location}</td>
        <td>{userInfo[i].hashtags.join(', ')}</td>
        <td>{userInfo[i].likes}</td></tr>);
      }
      return usercells;
    }
    var users = renderTable(this.props.userInfo);
    return (
      <div>
        #{this.props.searchInput}
        <button type="submit" onClick={()=>{this.props.setView("FrontPage")}}>Home Page</button>
        <table width="100%">
          <tbody>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Location</th>
              <th>Other Hashtags</th>
              <th>Likes</th>
            </tr>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Graph
