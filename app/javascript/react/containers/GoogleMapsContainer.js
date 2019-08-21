import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

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
    const style = {
       width: '26vw',
       height: '40vh',
       'marginRight': 'auto'
    }
    let latitude = this.props.courtCoordinates.latitude
    let longitude = this.props.courtCoordinates.longitude
    return(
      <div className="map">
        <Map
          item
          xs={11}
          style={style}
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={14}
          initialCenter={{ lat: latitude, lng: longitude }}
        >
          <Marker
            onClick={this.onMarkerClick}
            title={this.props.courtCoordinates.name}
            position={{ lat: latitude, lng: longitude }}
            name={this.props.courtCoordinates.name}
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
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyBFXos0YAwAPFYEmDtvRgKIT0vJMDm8870' })(GoogleMapsContainer)
