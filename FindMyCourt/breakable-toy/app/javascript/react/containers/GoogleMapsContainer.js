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
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }

    return(
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: 42.288684, lng: -71.134601 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={'This is hoop'}
          position={{ lat: 42.288684, lng: -71.134601 }}
          name={'This is hoop'}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyBFXos0YAwAPFYEmDtvRgKIT0vJMDm8870' })(GoogleMapsContainer)
