import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

import CurrentLocation from '../components/Map';

class GoogleMapsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClick = this.onMapClick.bind(this)
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render(){

    return(
      <div className="map">
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker
            onClick={this.onMarkerClick}
            title={'This is hoop'}
            position={{ lat: 42.288684, lng: -71.134601 }}
            name={'This is hoop'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyBFXos0YAwAPFYEmDtvRgKIT0vJMDm8870' })(GoogleMapsContainer)
