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
      userInfo: {
        blacklivesmatter: [
          {"username":"GLaurajeanne64","realname":"#LauraJeanne4Trump","location":"USA...Florida and Connecticut","hashtags":[{"indices":[75,92],"text":"BlackLivesMatter"},{"indices":[93,108],"text":"HillaryClinton"},{"indices":[109,121],"text":"BarackObama"},{"indices":[122,132],"text":"Democrats"}],"likes":47969,"followers":15091},
          {"username":"Mr_SAP75","realname":"Yup.","location":"","hashtags":[{"indices":[114,131],"text":"BlackLivesMatter"}],"likes":6624,"followers":139},
          {"username":"Lochy_D","realname":"Lochy Denke","location":"Melbourne, Victoria","hashtags":[{"indices":[59,76],"text":"BlackLivesMatter"}],"likes":5652,"followers":100},
          {"username":"lindas106","realname":"lovingmyplanet","location":"","hashtags":[{"indices":[50,67],"text":"BlackLivesMatter"},{"indices":[68,79],"text":"LoveIsLove"},{"indices":[80,94],"text":"ScienceIsReal"},{"indices":[95,122],"text":"WomensRightsAreHumanRights"}],"likes":18111,"followers":403},
          {"username":"susan_dolly","realname":"Susan Philpott","location":"","hashtags":[{"indices":[73,81],"text":"Georgia"},{"indices":[82,99],"text":"BlackLivesMatter"}],"likes":1644,"followers":37},
          {"username":"susan_dolly","realname":"Susan Philpott","location":"","hashtags":[{"indices":[70,76],"text":"Texas"},{"indices":[77,94],"text":"BlackLivesMatter"}],"likes":1644,"followers":37},
          {"username":"jdp021189","realname":"Jerry Prince","location":"Midwest, Indiana","hashtags":[{"indices":[19,26],"text":"Bishop"},{"indices":[61,70],"text":"powerful"},{"indices":[83,87],"text":"BLM"},{"indices":[112,129],"text":"BlackLivesMatter"}],"likes":105000,"followers":7187},
          {"username":"robbipl","realname":"Paul/Pablo","location":"Pennsylvania, USA","hashtags":[{"indices":[19,36],"text":"BlackLivesMatter"}],"likes":8532,"followers":3439},
          {"username":"theangrybaptist","realname":"Angry Baptist","location":"","hashtags":[{"indices":[29,46],"text":"blacklivesmatter"}],"likes":58,"followers":6},
          {"username":"michaelwbunner","realname":"Michael W. Bunner","location":"Norristown, PA","hashtags":[{"indices":[12,18],"text":"Obama"},{"indices":[20,29],"text":"Sharpton"},{"indices":[31,41],"text":"RepWilson"},{"indices":[43,60],"text":"BlackLivesMatter"},{"indices":[74,78],"text":"CNN"},{"indices":[83,89],"text":"MSNBC"},{"indices":[121,130],"text":"racecard"}],"likes":734,"followers":153},
          {"username":"Cancun01702935","realname":"Cancun","location":"","hashtags":[{"indices":[98,115],"text":"Blacklivesmatter"}],"likes":216,"followers":9},{"username":"madyell0wbid","realname":"Isabel","location":"St Louis, MO","hashtags":[{"indices":[69,80],"text":"STLVerdict"},{"indices":[81,90],"text":"ExpectUs"},{"indices":[91,108],"text":"BlackLivesMatter"}],"likes":79,"followers":5}
        ],
        metoo: [
          {"username":"MinouChrystayl","realname":"MINOU CHRYS-TAYL","location":"Côte d'Ivoire","hashtags":[{"indices":[84,89],"text":"RAPE"},{"indices":[90,105],"text":"balancetonporc"},{"indices":[106,112],"text":"MeToo"}],"likes":8969,"followers":1230},
        {"username":"RednexPunk","realname":"Anonymity","location":"Swamps of Texas","hashtags":[{"indices":[0,6],"text":"MeToo"}],"likes":13247,"followers":2433}, {"username":"banawedata","realname":"thewatcher","location":"","hashtags":[{"indices":[122,128],"text":"metoo"}],"likes":7519,"followers":393}, {"username":"magsmagenta","realname":"magsmagenta","location":"Scotland","hashtags":[{"indices":[21,27],"text":"MeToo"}],"likes":465,"followers":1700},
        {"username":"KirstyDillon","realname":"Kirsty Dillon","location":"","hashtags":[{"indices":[56,62],"text":"metoo"}],"likes":9490,"followers":7598},
        {"username":"Rdkil","realname":"Amanda Loose Key","location":"somewhere in time and space","hashtags":[{"indices":[41,47],"text":"metoo"}],"likes":30883,"followers":798},
        {"username":"LucyCharlie0613","realname":"The Night Watch","location":"United States","hashtags":[{"indices":[15,25],"text":"Weinstein"},{"indices":[37,43],"text":"AMJoy"},{"indices":[44,50],"text":"MeToo"}],"likes":765,"followers":191},
        {"username":"ccrcasting","realname":"Cara Chute Rosenbaum","location":"Los Angeles, CA","hashtags":[{"indices":[12,18],"text":"MeToo"}],"likes":1603,"followers":7100},
        {"username":"VoL_Ents","realname":"VOL Entertainment","location":"London, England","hashtags":[{"indices":[26,32],"text":"metoo"}],"likes":5,"followers":24},{"username":"Sparkle__Monkey","realname":"SpookyMonkey","location":"Shawlands, Glasgow, Scotland.","hashtags":[{"indices":[62,68],"text":"MeToo"}],"likes":335433,"followers":5727},
        {"username":"KangarooCaught","realname":"RajanNaidu","location":"","hashtags":[{"indices":[20,23],"text":"US"},{"indices":[24,36],"text":"RapeCulture"},{"indices":[37,43],"text":"MeToo"},{"indices":[44,50],"text":"Women"},{"indices":[51,61],"text":"Violation"},{"indices":[62,67],"text":"Rape"},{"indices":[68,77],"text":"Misogyny"},{"indices":[79,91],"text":"RogerRivard"},{"indices":[92,108],"text":"ClaytonWilliams"},{"indices":[110,119],"text":"ToddAkin"},{"indices":[121,134],"text":"FosterFriess"}],"likes":13650,"followers":2204},
        {"username":"SinKirabo","realname":"Mr. Not Your Token™","location":"Washington, DC","hashtags":[{"indices":[104,110],"text":"MeToo"}],"likes":8969,"followers":3884},
        {"username":"MzspellDena","realname":"Dena Kirkland","location":"Washington, DC","hashtags":[{"indices":[17,23],"text":"ねこあつめ"},{"indices":[24,38],"text":"CatsOfTwitter"},{"indices":[63,76],"text":"ImpeachTrump"},{"indices":[77,92],"text":"LasVegasStrong"},{"indices":[93,100],"text":"jump_譲"},{"indices":[101,109],"text":"NEWSで妄想"},{"indices":[110,115],"text":"cats"},{"indices":[116,122],"text":"MeToo"}],"likes":126141,"followers":2379},
        {"username":"BostonVolunteer","realname":"Boston Volunteers","location":"Boston, MA","hashtags":[{"indices":[32,38],"text":"MeToo"}],"likes":6255,"followers":2479},{"username":"newsundayherald","realname":"sunday herald","location":"Glasgow, Scotland","hashtags":[{"indices":[41,47],"text":"MeToo"}],"likes":1010,"followers":53411}]
      }
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
            // [
            //   {"username":"GLaurajeanne64","realname":"#LauraJeanne4Trump","location":"USA...Florida and Connecticut","hashtags":[{"indices":[75,92],"text":"BlackLivesMatter"},{"indices":[93,108],"text":"HillaryClinton"},{"indices":[109,121],"text":"BarackObama"},{"indices":[122,132],"text":"Democrats"}],"likes":47969,"followers":15091},
            //   {"username":"Mr_SAP75","realname":"Yup.","location":"","hashtags":[{"indices":[114,131],"text":"BlackLivesMatter"}],"likes":6624,"followers":139},
            //   {"username":"Lochy_D","realname":"Lochy Denke","location":"Melbourne, Victoria","hashtags":[{"indices":[59,76],"text":"BlackLivesMatter"}],"likes":5652,"followers":100},
            //   {"username":"lindas106","realname":"lovingmyplanet","location":"","hashtags":[{"indices":[50,67],"text":"BlackLivesMatter"},{"indices":[68,79],"text":"LoveIsLove"},{"indices":[80,94],"text":"ScienceIsReal"},{"indices":[95,122],"text":"WomensRightsAreHumanRights"}],"likes":18111,"followers":403},
            //   {"username":"susan_dolly","realname":"Susan Philpott","location":"","hashtags":[{"indices":[73,81],"text":"Georgia"},{"indices":[82,99],"text":"BlackLivesMatter"}],"likes":1644,"followers":37},
            //   {"username":"susan_dolly","realname":"Susan Philpott","location":"","hashtags":[{"indices":[70,76],"text":"Texas"},{"indices":[77,94],"text":"BlackLivesMatter"}],"likes":1644,"followers":37},
            //   {"username":"jdp021189","realname":"Jerry Prince","location":"Midwest, Indiana","hashtags":[{"indices":[19,26],"text":"Bishop"},{"indices":[61,70],"text":"powerful"},{"indices":[83,87],"text":"BLM"},{"indices":[112,129],"text":"BlackLivesMatter"}],"likes":105000,"followers":7187},
            //   {"username":"robbipl","realname":"Paul/Pablo","location":"Pennsylvania, USA","hashtags":[{"indices":[19,36],"text":"BlackLivesMatter"}],"likes":8532,"followers":3439},
            //   {"username":"theangrybaptist","realname":"Angry Baptist","location":"","hashtags":[{"indices":[29,46],"text":"blacklivesmatter"}],"likes":58,"followers":6},
            //   {"username":"michaelwbunner","realname":"Michael W. Bunner","location":"Norristown, PA","hashtags":[{"indices":[12,18],"text":"Obama"},{"indices":[20,29],"text":"Sharpton"},{"indices":[31,41],"text":"RepWilson"},{"indices":[43,60],"text":"BlackLivesMatter"},{"indices":[74,78],"text":"CNN"},{"indices":[83,89],"text":"MSNBC"},{"indices":[121,130],"text":"racecard"}],"likes":734,"followers":153},
            //   {"username":"Cancun01702935","realname":"Cancun","location":"","hashtags":[{"indices":[98,115],"text":"Blacklivesmatter"}],"likes":216,"followers":9},{"username":"madyell0wbid","realname":"Isabel","location":"St Louis, MO","hashtags":[{"indices":[69,80],"text":"STLVerdict"},{"indices":[81,90],"text":"ExpectUs"},{"indices":[91,108],"text":"BlackLivesMatter"}],"likes":79,"followers":5}
            // ]
            this.state.userInfo[this.state.searchInput]
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
            this.state.userInfo[this.state.searchInput]
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
