import React, {Component} from 'react';
import './css/Map.css';
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: undefined,
    }
    this.loadMap = this.loadMap.bind(this);
    this.newMarker = [];
  }
  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    var map = this.state.map;
    if(prevProps.markers !== this.props.markers) {
      var infowindow = new window.google.maps.InfoWindow();
      this.newMarker.forEach(oldMarks => {
        oldMarks.setMap(null);
      })

      this.newMarker = this.props.markers.map(place => {
        var mark =  new window.google.maps.Marker({
          position: place.geometry.location,
          label: place.label,
          map:map
        });
        window.google.maps.event.addListener(mark, 'click', function() {
          infowindow.setContent(`
            <div>
              <strong>${place.name}</strong><br>
              ${place.formatted_address}<br>
              <a href="https://www.google.com/maps/dir/?api=1&destination=${place.name}&destination_place_id=${place.place_id}">View on Google Maps</a>
            </div>
          `);
          console.log(place)
          infowindow.open(map, this);
        });
        return mark;
      })
    }
    if(prevProps.center !== this.props.center) {
      map.setCenter(this.props.center)
    }
  }

  loadMap(){
    var center = this.props.center;
    let map = new window.google.maps.Map(document.getElementById('mapView'), {
      zoom: 16,
      center: center
    });
    this.setState({map: map})
    var setMapBounds = this.props.setMapBounds;
  }

  render() {
    return (
      <div ref="map" id="mapView" style={{
        top: '500px',
        left: "30%",
        height: '500px',
        width: '500px',
        position: 'absolute',
        overflow: 'visible'
      }}>
      </div>
    );
  }
}
